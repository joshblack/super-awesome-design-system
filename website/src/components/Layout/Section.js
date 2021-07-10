/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';
import { HeadingLevelContext } from '../Text';

export function Section({ children, ...rest }) {
  const level = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={Math.min(level + 1, 6)}>
      <section {...rest}>{children}</section>
    </HeadingLevelContext.Provider>
  );
}
