import { Node } from 'components/molecules';
import { useCallback, useState } from 'react';
import { DropTargetHookSpec, useDrop } from 'react-dnd';
import { Curve } from '../Curve/Curve';

import { Draggable } from '../Draggable/Draggable';
import { Handle } from '../Handle/Handle';

import { styles } from './DropArea.style';


interface DragItem {
  id: string;
  type: 'node';
  left: number;
  top: number;
}

type DraggableMap = {
  [key: DragItem['id']]: Omit<DragItem, 'id'>;
};

type DropAreaProps = {
  accept: DropTargetHookSpec<unknown, unknown, unknown>['accept'];
};

export function DropArea({ accept }: DropAreaProps) {
  const [boxes, setBoxes] = useState<DraggableMap>({
    a: { left: 80, top: 20, type: 'node' },
    b: { left: 20, top: 180, type: 'node' },
  });

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes((oldBoxes) => ({
        ...oldBoxes,
        [id]: {
          ...oldBoxes[id],
          left,
          top,
        },
      }));
    },
    [],
  );

  const [, dropRef] = useDrop(
    () => ({
      accept,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        moveBox(item.id, left, top);
      },
    }),
    [moveBox],
  );

  return (
    <div ref={dropRef} css={styles.dropArea}>
      {Object.entries(boxes).map(([key, props]) => (
          <Draggable
            key={key}
            id={key}
            {...props}
          >
            <Node />
          </Draggable>
      ))}
      <Handle />
    </div>
  );
}
