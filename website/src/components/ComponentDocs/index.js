/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from 'next/link';
import * as React from 'react';
import * as classes from './ComponentDocs.module.scss';
import { Main } from '../../components/Main';

const links = [
  {
    type: 'section',
    heading: 'Overview',
    links: [
      {
        type: 'link',
        text: 'Getting started',
        href: '/docs/getting-started',
      },
    ],
  },
  {
    type: 'section',
    heading: 'Components',
    links: [
      {
        type: 'link',
        text: 'Accordion',
        href: '/docs/components/accordion',
      },
    ],
  },
  {
    type: 'section',
    heading: 'Changelog',
    links: [
      {
        type: 'link',
        text: 'Prerelease',
        href: '/changelog/prerelease',
      },
    ],
  },
];

function ComponentDocs() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={classes.page}>
      <nav aria-label="Directly navigate to site pages">
        <button
          aria-controls="navigation-links"
          aria-expanded={expanded}
          type="button"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          Navigation
        </button>
        <ul id="navigation-links" hidden={!expanded}>
          <li>
            <ul>
              <li>Navigation</li>
            </ul>
          </li>
        </ul>
      </nav>
      <Main aria-labelledby="page-title">
        <section>
          <h1 id="page-title">Component Name</h1>
          <article>
            <header>
              <h2>Installation</h2>
            </header>
            <p>Install info</p>
          </article>
          <section>
            <h2>API Reference</h2>
            <article>
              <header>
                <h3>
                  Component Name <span className="visually-hidden">props</span>
                </h3>
                <p>Component description</p>
              </header>
              <table aria-labelledby="component-name">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>defaultOpen</td>
                    <td>boolean</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </article>
          </section>
          <section>
            <h2>Accessibility</h2>
            <p>Adheres to the ___ pattern</p>
            <article>
              <header>
                <h3>Keyboard interactions</h3>
              </header>
              <table>
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Description</th>
                  </tr>
                </thead>
              </table>
            </article>
          </section>
          <footer>
            <a>Edit this page on GitHub</a>
          </footer>
        </section>
      </Main>
      <aside aria-labelledby="docs-toc" className={classes.toc}>
        <span id="docs-toc">Table of contents</span>
      </aside>
      <footer>Page footer</footer>
    </div>
  );
}

export { ComponentDocs };
