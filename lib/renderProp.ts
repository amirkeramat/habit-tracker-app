import React from 'react';

import { nodeToElement } from './nodeToElement';

export function renderProp<TArgs extends ReadonlyArray<unknown>>(
  prop: ((...args: TArgs) => React.ReactNode) | React.ReactNode,
  ...args: TArgs
): React.ReactElement | null {
  if (typeof prop === 'function') {
    return nodeToElement(prop(...args));
  }
  return nodeToElement(prop);
}
