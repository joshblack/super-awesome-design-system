/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Header } from '../../components/Header';
import { SkipToContent, Main } from '../../components/Main';

export default function StoriesIndex() {
  return (
    <>
      <SkipToContent />
      <Header />
      <Main aria-labelledby="page-title">
        <h1 id="page-title">Stories</h1>
      </Main>
    </>
  );
}
