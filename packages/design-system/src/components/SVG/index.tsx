/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

type Props = {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  tabIndex?: number;
  title?: string;
  children?: React.ReactNode;
  xmlns?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
};

/**
 * The `SVG` component is a primitive used for rendering accessible <svg>
 * elements in the browser. The most common scenarios include:
 *
 * - Adding a label to the <svg> element through `aria-label` or
 * `aria-labelledby`
 * - Adding a tabindex to the <svg> element in the case that the icon should be
 * interactive
 */
const SVG = React.forwardRef<SVGElement, Props>(function SVG(props, ref) {
  const {
    children,
    width,
    height,
    viewBox,
    xmlns = 'http://www.w3.org/2000/svg',
    ...rest
  } = props;
  const svgProps: React.SVGProps<SVGElement> = {
    ...rest,
    ref,
    width,
    height,
    viewBox,
    xmlns,
  };

  if (svgProps['aria-label'] || svgProps['aria-labelledby']) {
    svgProps.role = 'img';
  } else {
    svgProps['aria-hidden'] = true;
  }

  if (width && height && !viewBox) {
    svgProps.viewBox = `0 0 ${width} ${height}`;
  }

  return React.createElement('svg', svgProps, children);
});

export { SVG };
