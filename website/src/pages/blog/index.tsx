/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from 'next/link';
import { Header } from '../../components/Header';
import { SkipToContent, Main } from '../../components/Main';

export default function BlogIndexPage() {
  return (
    <>
      <SkipToContent />
      <Header />
      <Main aria-labelledby="page-title">
        <h1 id="page-title">Blogs</h1>
        <section>
          <h2>Blog posts</h2>
          <article>
            <header>Sample blog post</header>
            <p>
              Sit praesentium provident tenetur nulla accusamus alias? Quaerat
              vitae ut doloremque quam ipsa ducimus, aut, maiores fuga. Incidunt
              totam cumque amet maxime fuga! Consequuntur voluptatibus dicta
              deserunt nisi eos architecto
            </p>
          </article>
        </section>
        <section>
          <h2>Series</h2>
          <Link href="/series">View all series</Link>
          <article>
            <header>Sample series title</header>
            <p>
              Consectetur commodi odit iste libero labore Id eius odio quae
              voluptate magnam. Quibusdam quis voluptas suscipit deleniti
              placeat Veniam earum deleniti rem quos ad Nulla repellat beatae
              pariatur eveniet incidunt?
            </p>
          </article>
        </section>
      </Main>
    </>
  );
}
