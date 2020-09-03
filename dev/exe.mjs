/**
 * @license MIT
 */

/**
 * Compiler-level constant that informs CC whether or not to rename tag names.
 * Override in Closure Compiler with `--define='PRODUCTION=true'`.
 *
 * @define {boolean}
 * @ignore
 */
var PRODUCTION = false;

/**
 * Global flags and settings for the library.
 *
 * @exportSymbol
 */
const WIDGETS_FLAGS = {
  PRODUCTION: PRODUCTION,

  /**
   * The start of this execution.
   *
   * @type {number}
   */
  // LOAD_START: performance.now(),

  /**
   * Will print debug statements if set to `true`.
   *
   * @type {boolean}
   */
  DEBUG: false,

  /**
   * The stylesheet that will hold all styles for this page.
   *
   * @type {Element}
   */
  STYLESHEET: document.createElement('style'),

  /**
   * List of cached classNames for this run.
   *
   * @type {Array<string>}
   */
  CACHED_CLASSNAMES: [],

  /**
   * Cached CSS class data.
   *
   * @type {Object<string, Array<string>>}
   */
  CLASS_DATA: {},

  /**
   * For storing performance WIDGETS_FLAGS.TIMES if necessary.
   *
   * @type {Array<number>}
   */
  TIMES: [],
};

/**
 * Append the Widgets stylesheet to the document head.
 *
 * @return {void}
 */
const addStylesheet = () => document.head.appendChild(
    WIDGETS_FLAGS.STYLESHEET,
);

/**
 * Allows for Widget mixins, so that we can extend multiple Widgets at once.
 * Returns a `Widget` constructor.
 *
 * @exportSymbol
 * @param  {...Function} classes
 * @example
 *  class ElevatedColumn extends Mix(Column, Elevation2) {
 *      ...
 *  }
 */
/**
 * @param {...?} classes
 * @return {Function}
 */
function Mix(...classes) {
  const mixed = class extends Widget {
    /**
     * Inherit from a set of classes.
     *
     * @param  {...?} classes The classes to inherit from.
     */
    static inheritClasses(...classes) {
      this.classesToInherit.push(...classes);
    }

    /**
     * Get the classNames for the new class.
     *
     * @return {Function}
     */
    static get classNames() {
      super.cacheStyles();
      return [
        this.name,
        ...this.classesToInherit,
      ];
    }
  };

  mixed.classesToInherit = [];

  for (const mixClass of classes) {
    mixed.inheritClasses(...mixClass.classNames);
  }

  return mixed;
}

/**
 * An abstract class which will pass down static properties to classes that
 * extend it, and cache class-level styles with CSS. Presently, this is done
 * with static getters, but if/when [TC39 class fields
 * proposal](https://github.com/tc39/proposal-class-fields) reaches stage 4,
 * static public fields can be used instead. This has been supported in V8
 * [since 2018](https://v8.dev/features/class-fields#public-class-fields), but
 * Closure Compiler cannot compile the pattern, so it is [presently
 * unsupported](https://github.com/google/closure-compiler/issues/2731#issuecomment-647695017).
 *
 *
 * Static members below, such as `Inheritable.attributes`,
 * `Inheritable.classNames`, etc. can be overridden on local instances, where
 * the inherited properties act as defaults. In essence, a `new Inheritable`
 * will inherit `Inheritable.classNames`, but can be modified to have different
 * local `classNames` than its constructor's defaults.
 *
 * The `Widget` class relies on `Inheritable` behavior to allow subclassing and
 * overrides.
 *
 * @abstract
 * @category Core
 * @example
 * // overriding metadata
 * class InheritableOverride extends Inheritable {
 * static get styles() {
 * return `
 * background-color: red;
 * `;
 * }
 * }
 *
 * // TC39:
 * // class InheritableOverride extends Inheritable {
 * //      static styles = `
 * //          background-color: red;
 * //      `;
 * // }
 *
 * class Child extends InheritableOverride {}
 * console.log(Child.classNames, Child.styles.trim());
 * // ["Child", "InheritableOverride", "Inheritable"]
 * // "background-color: red;"
 */
class Inheritable {
  /**
   * Create a new `Inheritable`.
   */
  constructor() {
    /**
     * Inherits from static `tag`. The local `tag` for this `Inheritable`.
     *
     * @type {string}
     */
    this.tag = this.constructor.tag.slice(0);

    /**
     * The local `attributes` for this `Inheritable`. Inherits from static
     * `attributes`.
     *
     * @type {Object<string, ?>}
     */
    this.attributes = { ...this.constructor.attributes };

    /**
     * The local `classNames` for this `Inheritable`. Inherits from static
     * `classNames`.
     *
     * @type {Array<string>}
     */
    this.classNames = this.constructor.classNames.slice(0);
  }

  /**
   * The inheritable default `tag` for instances of this class.
   *
   * @type {string}
   */
  static get tag() {
    return '';
  }

  /**
   * The inheritable default `attributes` for instances of this class.
   *
   * @type {Object}
   */
  static get attributes() {
    return {};
  }

  /**
   * All inherited default `classNames` for this class.
   *
   * @type {Array<string>}
   */
  static get classNames() {
    /**
     * @type {string}
     */
    const className = this.name;
    if (className in WIDGETS_FLAGS.CLASS_DATA) {
      return WIDGETS_FLAGS.CLASS_DATA[className];
    }

    /**
     * @type {Array<string>}
     */
    const classNames = [className];
    const inheritedClasses = Object.getPrototypeOf(this).classNames;

    if (inheritedClasses) {
      classNames.push(
          ...inheritedClasses,
      );
    }

    this.cacheStyles();
    WIDGETS_FLAGS.CLASS_DATA[className] = classNames;
    return classNames;
  }


  /**
   * Cache a list of classNames which have been added to the CSSOM.
   *
   * @return {Inheritable} this
   */
  static cacheStyles() {
    const className = this.name;
    const styles = this.styles || '';

    if (
      styles &&
      WIDGETS_FLAGS.STYLESHEET.sheet &&
      !WIDGETS_FLAGS.CACHED_CLASSNAMES.includes(className)
    ) {

      const declaration = `.${className} {${styles}}`;
      WIDGETS_FLAGS.STYLESHEET.sheet.insertRule(declaration);
      WIDGETS_FLAGS.CACHED_CLASSNAMES.push(className);
    }

    return this;
  }
}

/**
 * The `Widget` class specifies an `Inheritable` which maps its values to an
 * `HTMLElement` using an instance method `build()`.
 *
 * Methods beginning with `set*`, i.e. `setStyles()`, will change a Widget's
 * *metadata*, whereas methods beginning with `apply*` will apply metadata to
 * `Widget.element`.
 *
 * The purpose of the `build()` method is to **apply** all of the Widget's
 * **metadata** to `Widget.element`.
 *
 * @category Core
 * @exportSymbol
 */
class Widget extends Inheritable {
  /**
   * @param  {...WidgetLike} children The Widget's children. Strings map to
   * TextNodes.
   *
   * @example
   *  class MyHeader extends Widget {
   *      static get tag() {
   *          return 'h1';
   *      }
   *  }
   *
   *  MyHeader("Text").build().element;
   *  // <h1 class="myheader">Text</h1>
   */
  constructor(...children) {
    super();

    /**
     * An instance property containing the Widget's DOM element. `null` until
     * built.
     *
     * @type {Node}
     */
    this.element;

    /**
     * An instance property containing the Widget's children. Can be empty.
     *
     * @type {Array<WidgetLike>}
     */
    this.children = children;

    /**
     * This tag for this Widget instance's element.
     *
     * @type {string}
     */
    this.tag = this.constructor.tag || (
             this.constructor.name
    );

    /**
     * The classNames for this Widget instance, including inherited and manually
     * applied classes.
     *
     * @type {Array<string>}
     */
    this.classNames = this.constructor.classNames.slice(0) || [];

    /**
     * The attributes for this element, including inherited and manually applied
     * attributes.
     *
     * @type {Object<string, string>}
     */
    this.attributes = { ...this.constructor.attributes };

    /**
     * The local styles for this Widget instance, ONLY includes element-specific
     * styles.
     *
     * Styles for this class are stored in a CSS class rather than dumped into
     * the `style` attribute.
     *
     * @type {string}
     */
    this.styles = '';
  }

  /**
   * Dump `this.element` to string for SSR.
   *
   * @type {string}
   */
  get html() {
    return this.element.outerHTML;
  }

  /**
   * Get this Widget's styles as a string.
   *
   * @return {string}
   */
  static get styles() {
    return `
            box-sizing: border-box;
        
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            background-attachment: scroll;
        `;
  }

  /**
   *
   * @param {string} property The CSS property to transition.
   *
   * @param {string|number} value The value to transition to.
   *
   * @param {string} transition Customize the transition curve.
   *
   * @return {Widget} this
   */
  animate(property, value, transition = '0.2s ease-in') {
    this.element.style.setProperty('transition', `${property} ${transition}`);
    this.element.style.setProperty(property, value);
    return this;
  }

  /**
   * Builds `child`, and appends the generated `child.element` to
   * `this.element`. Returns `this`.
   *
   * @param {Widget} child The child whose `Widget.element` will be appended.
   * `child` must be built before passing to `append`.
   *
   * @return {Widget} this
   */
  append(child) {

    child.build(),
    this.element.appendChild(child.element);

    return this;
  }

  /**
   * Apply attribute metadata in `this.attributes` to `this.element`. Returns
   * `this`.
   *
   * @return {Widget} this
   * @ignore
   */
  applyAttributes() {

    if (this.attributes) {
      for (const [key, val] of Object.entries(this.attributes)) {
        this.element.setAttribute(key, val);
      }
    }

    return this;
  }

  /**
   * Apply class metadata in `this.classes` to `this.element`. Returns `this`.
   *
   * @return {Widget} this
   * @ignore
   */
  applyClasses() {
    const classNames = this.classNames;

    if (classNames.length) {
      this.element.className = classNames.join(' ');
    }

    return this;
  }

  /**
   * Initialize `this.element` using `this.tag`. Returns `this`.
   *
   * @return {Widget} this
   * @ignore
   */
  applyElement() {

    const newElement = document.createElement(this.tag);

    return this.replace(newElement);
  }

  /**
   * Apply style metadata in `this.styles` to `this.element`. Returns `this`.
   *
   * @ignore
   * @return {Widget} this
   */
  applyStyles() {

    if (this.styles) {
      this.element.setAttribute('style', this.styles);
    }

    return this;
  }

  /**
   * Build `this.element` based on the Widget's metadata and children. Returns
   * `this`.
   *
   * @return {Widget} this
   */
  build() {

    this.applyElement()
        .applyAttributes()
        .applyClasses()
        .applyStyles();

    if (!this.children.length) return this;
    else {
      this.children.forEach(
          (child) => {
            this.append(
                    typeof child !== 'string'
                        ? child
                        : new TextNode(child),
            );
          });
    }

    return this;
  }

  /**
   * Render `this.element` into `target`. Returns `this`.
   *
   * @param {Node} target The DOM node which will be replaced with
   * `this.element`.
   *
   * @return {Widget} this
   */
  render(target = this.element) {

    if (!this.element) this.build();
    target.replaceWith(this.element);

    return this;
  }

  /**
   * Replace `this.element` with the given `node`. Returns `this`.
   *
   * @param {Node} node The DOM node to replace `this.element` with.
   *
   * @return {Widget} this
   */
  replace(node) {

    if (!this.element) this.element = node;
    else this.element.replaceWith(node);

    return this;
  }

  /**
   * Replace Widget's element with a TextNode. Returns `this`.
   *
   * @param {string} text The content of the TextNode.
   *
   * @return {Widget} this
   */
  replaceText(text) {

    const newNode = document.createTextNode(text);

    return this.replace(newNode);
  }

  /**
   * Set Widget attribute metadata. Returns `this`.
   *
   * @param {Object<String, ?>} attributes
   * @return {Widget} this
   */
  setAttributes(attributes) {

    // eslint-disable-next-line guard-for-in
    for (const key in attributes) {
      this.attributes[key] = attributes[key];
    }

    return this;
  }

  /**
   * Set Widget class metadata. Returns `this`.
   *
   * @param  {...string} args Class names.
   *
   * @return {Widget} this
   */
  setClasses(...args) {

    this.classNames.push(...args);

    return this;
  }

  /**
   * Set Widget style metadata. Returns `this`.
   *
   * @param {string} styles A key-value map of styles.
   *
   * @return {Widget} this
   */
  setStyles(styles) {

    this.styles += styles;

    return this;
  }
}

/**
 * @category Widgets
 * @augments Widget
 */
class TextNode extends Widget {
  /**
   * Initialize a TextNode with the given `text`.
   *
   * @param {string} text The content of the textNode.
   */
  constructor(text) {
    super();
    this.text = text;
  }

  /**
   * Render the `TextNode`.
   *
   * @return {TextNode} this
   */
  build() {
    return this.replaceText(this.text);
  }
}

/**
 * @license MIT
 */

/**
 * A Widget with elevation `1`.
 *
 * @category Widgets
 * @augments Widget
 */
class Elevation1 extends Widget {
  static get styles() {
    return `box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),`
      + `0 2px 1px -1px rgba(0, 0, 0, 0.12),`
      + `0 1px 3px 0 rgba(0, 0, 0, 0.20);`;
  }
}

/**
 * @category Widgets
 * @augments Widget
 */
class Center extends Widget {
  static get styles() {
    return `
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        `;
  }
}

/**
 * A full-width element.
 *
 * @category Widgets
 * @augments Widget
 */
class FullWidth extends Widget {
  static get styles() {
    return `width: 100%;`;
  }
}

/**
 * A full-height element.
 *
 * @category Widgets
 * @augments Widget
 */
class FullHeight extends Widget {
  static get styles() {
    return `height: 100%;`;
  }
}

// END POSITIONAL WIDGETS

/**
 * By descending text-like Widgets
 * from `TextWidget`, we can set
 * default text properties like
 * `color` and `font-family`.
 *
 * @category Widgets
 * @augments Widget
 */
class TextWidget extends Widget {
  static get styles() {
    return `
            font-family: Lato, Arial, Helvetica, sans-serif;
            color: black;
        `;
  }
}

/**
 * A boring `h1` element.
 *
 * @category Widgets
 * @augments TextWidget
 */
class Heading1 extends TextWidget {
  static get tag() {
    return 'h1';
  }
}

/**
 * A boring `h2` element.
 *
 * @category Widgets
 * @augments TextWidget
 */
class Heading2 extends TextWidget {
  static get tag() {
    return 'h2';
  }
}

/**
 * A boring `h1` element, but centered inside
 * its container.
 *
 * @category Widgets
 * @augments Widget
 */
class CenteredHeading1 extends Mix(Heading1, Center) {}

/**
 * A boring `h2` element, but centered
 * inside its container.
 *
 * @category Widgets
 * @augments Widget
 */
class CenteredHeading2 extends Mix(Heading2, Center) {}

/**
 * Flex Widgets display with `display: flex`
 * and expose the `setFlex` method.
 *
 * @category Widgets
 * @augments Widget
 */
class Flex extends Widget {
  static get styles() {
    return `
            display: flex;
            flex-shrink: 0;
            flex-basis: 0;
            flex-grow: 1;
            flex-direction: column;
            align-items: center;
        `;
  }

  /**
   * Set this Widget's flex value.
   *
   * @param {number!} flex
   * Flex value for this widget.
   *
   * @return {Widget} this
   */
  setFlex(flex = 1) {
    return this.setStyles(`flex-grow: ${flex};`);
  }
}

/**
 * @category Widgets
 * @augments Flex
 */
class Column extends Flex {
  static get styles() {
    return `
            flex-direction: column !important;
        `;
  }
}

/**
 * @category Widgets
 * @augments Flex
 */
class Row extends Flex {
  static get styles() {
    return `
            flex-direction: row !important;
        `;
  }
}

/**
 * @category Widgets
 * @augments Flex
 */
class Card extends Flex {
  static get styles() {
    return `
            background: rgba(255, 255, 255, 0.1);
            border: 4px solid white;
            margin: 10px;
        `;
  }
}

/**
 * @category Widgets
 * @augments Flex
 */
class CenteredCard extends Mix(Center, Card, FullWidth) {}

/**
 * Renders dark text, i.e. `color: black`.
 *
 * @category Widgets
 */
class DarkText extends TextWidget {
  static get styles() {
    return `
            color: black;
        `;
  }
}

/**
 * Renders bold text.
 *
 * @category Widgets
 */
class BoldText extends TextWidget {
  static get styles() {
    return `
            font-weight: bold;
        `;
  }
}

/**
 * A horizontal layout is a full-width
 * flex row.
 *
 * @category Widgets
 * @augments Widget
 */
class Horizontal extends Mix(FullWidth, Row) {
  static get styles() {
    return `justify-content: space-around;`;
  }
}

/**
 * A vertical layout is a full-height
 * flex column.
 *
 * @category Widgets
 * @augments Widget
 */
class Vertical extends Mix(FullHeight, Column) {
  static get styles() {
    return `justify-content: space-around;`;
  }
}

/**
 * Renders a DarkText at 50% opacity.
 *
 * @category Widgets
 */
class GreyText extends DarkText {
  static get styles() {
    return 'opacity: 0.5;';
  }
}

/**
 * The content of a ListItem.
 */
class ListItemContent extends Vertical {
  static get styles() {
    return `
            align-items: start !important;
            justify-content: center;
        `;
  }
}

/**
 * An item in a List.
 *
 * @category Widgets
 * @augments Row
 */
class ListItem extends Mix(Row, Elevation1) {
  /**
   * @param {{
   *  left: WidgetLike,
   *  title: WidgetLike,
   *  subtitle: WidgetLike,
   *  right: WidgetLike
   * }} options
   * Options for the ListItem.
   */
  constructor({ left, title, subtitle, right }) {
    super(
        left,
        new ListItemContent(
            new BoldText(title),
            new GreyText(subtitle),
        ),
        right,
    );
  }

  static get styles() {
    return `
            margin: 4px 0;
            width: 100%;
            height: 80px;
            padding: 24px;
        `;
  }
}

/** @license MIT */

new Center().build().render();

/** Add the stylesheet to the CSSOM. */
addStylesheet();
export default {  };
