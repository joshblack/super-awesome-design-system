/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from 'next/link';

export function Header() {
  return (
    <header aria-label="Site header">
      <Link href="/">
        <a>
          <span>SADS</span>
        </a>
      </Link>
      <nav aria-label="Site navigation">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
