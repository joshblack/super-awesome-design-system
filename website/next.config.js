/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');

module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  webpack5: true,
  webpack(config) {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    return config;
  },
};
