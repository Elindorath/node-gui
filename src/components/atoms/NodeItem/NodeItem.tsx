import type { PropsWithChildren } from 'react';

import { styles } from './NodeItem.css';


export function NodeItem({ children }: PropsWithChildren) {
  return (
    <div className={styles.nodeItem}>
      {children}
    </div>
  );
}
