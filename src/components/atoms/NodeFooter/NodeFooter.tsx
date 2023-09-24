import { memo } from 'react';

import { styles } from './NodeFooter.css';


export const NodeFooter = memo(function NodeFooter() {
  return (
    <div className={styles.nodeFooter}></div>
  );
});
