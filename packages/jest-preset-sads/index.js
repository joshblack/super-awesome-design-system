/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  setupFiles: [require.resolve('./setup/setup.js')],
  setupFilesAfterEnv: [require.resolve('./setup/setupAfterEnv.js')],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/**/*.(spec|test).[jt]s?(x)',
    '<rootDir>/**/*-(spec|test).[jt]s?(x)',
  ],
  testPathIgnorePatterns: ['/es/', '/lib/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': require.resolve('./transform/jsTransform.js'),
    '^.+\\.css$': require.resolve('./transform/cssTransform.js'),
    '^(?!.*\\.(ts|tsx|js|jsx|css|json)$)': require.resolve(
      './transform/fileTransform.js'
    ),
  },
  transformIgnorePatterns: [
    '/es/',
    '/lib/',
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
  watchPathIgnorePatterns: ['/es/', '/lib/'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
