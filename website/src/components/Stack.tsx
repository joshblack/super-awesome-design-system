/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cx from 'classnames';
import * as React from 'react';

type Props<T extends React.ReactNode> = {
  as: T;
  children: React.ReactNode;
  spacing: number | string;
  orientation: 'horizontal' | 'vertical';
};

const Stack = React.forwardRef(function Stack<T>(
  props: Props<T>,
  ref: React.ForwardedRef<T>
) {
  const {
    as: BaseComponent = 'div',
    children,
    spacing,
    orientation,
    ...rest
  } = props;
  const className = cx({
    hstack: orientation === 'horizontal',
    vstack: orientation === 'vertical',
  });

  return (
    <BaseComponent {...rest} className={className} ref={ref}>
      {children}
    </BaseComponent>
  );
});

export { Stack };
