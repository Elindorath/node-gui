import { useDragLayer } from 'react-dnd';
import type { XYCoord } from 'react-dnd';

import { styles } from './CustomDragLayer.style';
import { DraggablePreview } from '../DraggablePreview/DraggablePreview';


// type CustomDragLayerProps = {};

export function CustomDragLayer() {
  const {
    itemType,
    isDragging,
    // item,
    initialOffset,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  function renderItem() {
    switch (itemType) {
      case 'node':
        return <DraggablePreview />;
      default:
        return null;
    }
  }

  if (!isDragging) {
    return null;
  }

  return (
    <div css={styles.dragLayer}>
      <div
        style={getItemStyles(initialOffset, currentOffset)}
      >
        {renderItem()}
      </div>
    </div>
  );
}

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;

  return { transform };
}
