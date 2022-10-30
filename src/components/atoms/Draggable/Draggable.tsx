import { memo, PropsWithChildren, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import { styles } from './Draggable.style';

import type { DragSourceMonitor } from 'react-dnd';


type DraggableProps = PropsWithChildren<{
  id: string;
  left: number;
  top: number;
  type: 'node';
}>;

export const Draggable = memo(function Draggable({ id, left, top, type, children }: DraggableProps) {
  const [{ isDragging }, dragRef, preview] = useDrag(
    () => ({
      type,
      item: { id, left, top },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div
      ref={dragRef}
      css={styles.draggable}
      style={getStyles(left, top, isDragging)}
    >
      {children}
    </div>
  );
});

function getStyles(left: number, top: number, isDragging: boolean) {
  return {
    transform: `translate3d(${left}px, ${top}px, 0)`,
    opacity: isDragging ?  0 : 1,
  };
}
