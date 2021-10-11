/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import classes from './Header.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header aria-label="Site header" className={classes.header}>
      <Link href="/">
        <a className="center">
          <span>SADS</span>
        </a>
      </Link>
      <nav aria-label="Site navigation">
        <ul className={classes.links}>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/stories">Stories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
