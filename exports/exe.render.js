/** @license MIT */

import page from '../lib/page.js';
import { DebugScript } from '../lib/widgets.js';

/**
 * Render page and export.
 */
export default page.append(
    new DebugScript(
        'exports/exe.initState.js',
        'dist/exe.initState.js',
    ),
).render();

/**
 * For binding to window in dev mode.
 */
import * as widgets from '../lib/widgets.js';
import * as globals from '../lib/globals.js';
import * as devWidgets from '../lib/page.js';

import { DEBUG, debugLog } from '../lib/globals.js';

/**
 * If dev mode, assign all exports to the global object and cache all styles.
 */
if (DEBUG) {
  /**
   * Assign all to `window`.
   */
  debugLog('[DEV MODE] Exporting modules to window object...');
  Object.assign(window, globals);
  Object.assign(window, devWidgets);
  Object.assign(window, widgets);

  /**
   * Cache all styles.
   */
  debugLog('[DEV MODE] Caching styles for all Widgets...');
  const widgetClasses = [
    ...Object.values(devWidgets),
    ...Object.values(widgets),
  ];
  for (const widgetClass of widgetClasses) {
    if (widgetClass.exportStyles) widgetClass.exportStyles();
  }
}
