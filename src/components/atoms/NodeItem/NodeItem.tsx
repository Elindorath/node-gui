import { memo } from 'react';

import { styles } from './NodeItem.css';

import type { PropsWithChildren } from 'react';


export const NodeItem = memo(function NodeItem({ children }: PropsWithChildren) {
  return (
    <div className={styles.nodeItem}>
      {children}
    </div>
  );
});
