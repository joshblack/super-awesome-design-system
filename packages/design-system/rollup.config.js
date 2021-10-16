/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import stripBanner from 'rollup-plugin-strip-banner';
import packageJson from './package.json';

const banner = `/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;

const dependencyTypes = ['dependencies', 'devDependencies', 'peerDependencies'];
const external = dependencyTypes.flatMap((type) => {
  if (packageJson[type]) {
    return Object.keys(packageJson[type]);
  }
  return [];
});

module.exports = {
  input: 'src/index.ts',
  external,
  plugins: [
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts', '.tsx'],
    }),
    commonjs({
      include: /node_modules/,
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    babel({
      babelrc: false,
      exclude: /node_modules/,
      babelHelpers: 'runtime',
      presets: ['babel-preset-sads'],
      extensions: ['.ts', '.tsx', '.js'],
    }),
    stripBanner(),
  ],
  output: [
    {
      file: 'esm/index.js',
      format: 'esm',
      banner,
    },
  ],
};
