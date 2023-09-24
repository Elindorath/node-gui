import { useCallback } from 'react';

import { nodeList } from 'models/nodeList';

import { styles } from './Menu.css';

import type { DragEvent} from 'react';

import type { NodeType } from 'models/nodeList';


export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.header}>Nodes</div>
      <div className={styles.body}>
        {Object.entries(nodeList).map(([type, { label }]) => (
          <MenuItem key={type} type={type as NodeType} label={label} />
        ))}
      </div>
    </div>
  );
};

type MenuItemProps = {
  type: NodeType;
  label: string;
};

const MenuItem = function MenuItem({ type, label }: MenuItemProps) {
  const onDragStart = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.dataTransfer.setData('application/reactflow', type);
      event.dataTransfer.effectAllowed = 'move';
    },
    [type]
  );

  return (
    <div className={styles.itemWrapper} draggable onDragStart={onDragStart}>
      <div className={styles.item}>
        {label}
        <div className={styles.itemBorder} />
      </div>
    </div>
  );
};
