/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import { SVG } from '../SVG';

describe('SVG', () => {
  it('should support a custom `ref`', () => {
    const ref = React.createRef<SVGElement>();
    const { container } = render(
      <SVG ref={ref}>
        <circle cx="50" cy="50" r="50" />
      </SVG>
    );

    expect(container.firstChild).toEqual(ref.current);
  });

  it('should render using `aria-hidden` by default', () => {
    const { container } = render(
      <SVG>
        <circle cx="50" cy="50" r="50" />
      </SVG>
    );

    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('should forward additional props to the <svg> element', () => {
    render(
      <SVG data-testid="test">
        <circle cx="50" cy="50" r="50" />
      </SVG>
    );

    const node = screen.getByTestId('test');

    expect(node).toBeDefined();
    expect(node.tagName).toBe('svg');
  });

  it('should support labeling through `aria-label` and `aria-labelledby`', () => {
    render(
      <>
        <SVG data-testid="label" aria-label="test-label">
          <circle cx="50" cy="50" r="50" />
        </SVG>
        <SVG data-testid="labelledby" aria-labelledby="title">
          <title id="title">test-title</title>
          <circle cx="50" cy="50" r="50" />
        </SVG>
      </>
    );

    const label = screen.getByTestId('label');
    expect(label).toHaveAttribute('role', 'img');

    const labelledby = screen.getByTestId('labelledby');
    expect(labelledby).toHaveAttribute('role', 'img');
  });

  describe('accessibility', () => {
    it('should no aXe violations', async () => {
      const { container } = render(
        <>
          <SVG>
            <circle cx="50" cy="50" r="50" />
          </SVG>
          <SVG aria-label="test-label">
            <circle cx="50" cy="50" r="50" />
          </SVG>
          <SVG aria-labelledby="title">
            <title id="title">test-title</title>
            <circle cx="50" cy="50" r="50" />
          </SVG>
          <SVG aria-label="test-label" tabIndex={0}>
            <circle cx="50" cy="50" r="50" />
          </SVG>
        </>
      );

      await expect(container).toHaveNoAxeViolations();
    });
  });
});
