/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { useOutsideClick } from '../useOutsideClick';

describe('useOutsideClick', () => {
  it('should call the given callback if a click occurs outside of the element', () => {
    const callback = jest.fn();

    function TestComponent() {
      const ref = React.useRef<HTMLDivElement>(null);

      useOutsideClick(ref, callback);

      return (
        <div ref={ref}>
          <button type="button">inside</button>
        </div>
      );
    }

    render(
      <>
        <TestComponent />
        <button type="button">outside</button>
      </>
    );

    const inside = screen.getByText('inside');
    const outside = screen.getByText('outside');

    expect(callback).not.toHaveBeenCalled();

    userEvent.click(inside);
    expect(callback).not.toHaveBeenCalled();

    userEvent.click(outside);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
