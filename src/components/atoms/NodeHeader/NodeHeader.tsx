import { memo } from 'react';

import { styles } from './NodeHeader.css';


type Props = {
  label: string;
};

export const NodeHeader = memo(function NodeHeader({ label }: Props) {
  return (
    <div className={styles.nodeHeader}>{label}</div>
  );
});
