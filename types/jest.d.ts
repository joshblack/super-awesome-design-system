/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoAxeViolations(): R;
    }
  }
}

export {};
