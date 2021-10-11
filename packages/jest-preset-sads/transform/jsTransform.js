'use strict';

const { default: babelJest } = require('babel-jest');
const { createTransformer } = babelJest;

const babelOptions = {
  presets: [require.resolve('babel-preset-sads/test')],
};

module.exports = createTransformer(babelOptions);
