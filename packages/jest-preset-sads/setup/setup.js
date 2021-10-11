/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

global.__DEV__ = true;

global.requestAnimationFrame = function requestAnimationFrame(callback) {
  setTimeout(callback, 0);
};
