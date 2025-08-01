import React, { isValidElement } from 'react';

export function nodeToElement(
  item: React.ReactNode | undefined | null
): React.ReactElement | null {
  if (item == null) {
    return null;
  }
  if (isValidElement(item)) {
    return item;
  }
  return <>{item}</>;
}
