import type { PropsWithChildren } from 'react';

import { styles } from './NodeItem.style';


export function NodeItem({ children }: PropsWithChildren) {
  return (
    <div css={styles.nodeItem}>
      {children}
    </div>
  );
}
