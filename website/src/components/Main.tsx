/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';

const SHARED_SKIP_ID = 'skip-to-content';

interface Props {
  children: React.ReactNode;
}

export function Main({ children, ...rest }: Props) {
  return (
    <main {...rest} id={SHARED_SKIP_ID} tabIndex={-1}>
      {children}
    </main>
  );
}

export function SkipToContent() {
  return <a href={`#${SHARED_SKIP_ID}`}>Skip to content</a>;
}
