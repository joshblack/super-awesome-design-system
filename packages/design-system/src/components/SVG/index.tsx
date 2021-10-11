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
  children: React.ReactNode;
};

const SVG = React.forwardRef<SVGElement, Props>(function SVG(props, ref) {
  const { children, ...rest } = props;
  const svgProps: React.SVGProps<SVGElement> = {
    ...rest,
    ref,
  };

  if (svgProps['aria-label'] || svgProps['aria-labelledby']) {
    svgProps.role = 'img';
  } else {
    svgProps['aria-hidden'] = true;
  }

  return React.createElement('svg', svgProps, children);
});

export { SVG };
