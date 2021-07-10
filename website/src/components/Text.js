/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

const TextDirectionContext = createContext(null);

export function TextDirection({ children, textDir = 'auto' }) {
  return (
    <TextDirectionContext.Provider value={textDir}>
      {children}
    </TextDirectionContext.Provider>
  );
}

export function Text({ children }) {
  const textDir = useContext(TextDirectionContext);
  return <span dir={textDir || 'auto'}>{children}</span>;
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export const HeadingLevelContext = createContext(1);

export function Heading({ children }) {
  const level = useContext(HeadingLevelContext);
  return React.createElement(`h${level}`, children);
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};
