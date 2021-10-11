/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

/**
 * `useOutsideClick` provides a way to detect if a click event occurs on
 * something outside of the given `ref`. If this condition occurs, then the
 * given `callback` is invoked. This is useful for changing state like the
 * visibility of an item if a part of the page outside of that item is clicked.
 */
export function useOutsideClick<T extends HTMLElement>(
  ref: React.MutableRefObject<T | null>,
  callback: () => void
) {
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  });

  React.useEffect(() => {
    function mouseListener(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        savedCallback?.current();
      }
    }

    function touchListener(event: TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent#event_firing
        event.preventDefault();
        savedCallback?.current();
      }
    }

    document.addEventListener('mousedown', mouseListener);
    document.addEventListener('touchstart', touchListener);

    return () => {
      document.removeEventListener('mousedown', mouseListener);
      document.removeEventListener('touchstart', touchListener);
    };
  }, [ref]);
}
