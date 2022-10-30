import { Node } from 'components/molecules';
import { memo } from 'react';

import { styles } from './DraggablePreview.style';


export const DraggablePreview = memo(function DraggablePreview() {
  return (
    <div css={styles.draggablePreview}>
      <Node />
    </div>
  );
});
