import { memo } from 'react';

import { NodeItem } from '../NodeItem/NodeItem';

import { styles } from './NodeItemList.css';

import type { ReactNode } from 'react';
import type { NodeInputData } from 'models/NodeInputData';
import type { NodeOutputData } from 'models/NodeOutputData';


type Props<T extends NodeInputData | NodeOutputData> = {
  title: string;
  items: Array<T>;
  renderItem: (item: T, index: number) => ReactNode;
};

export const NodeItemList = memo(function NodeItemList<T extends NodeInputData | NodeOutputData>({
  title,
  items = [],
  renderItem = () => void 0,
}: Props<T>) {
  if (!items.length) {
    return null;
  }

  return (
    <section className={styles.nodeItemListRoot}>
      <header className={styles.nodeItemListHeader}>{title}</header>
      <ul className={styles.nodeItemList}>
        {items.map((item, i) => (
          <NodeItem key={i}>
            {renderItem(item, i)}
          </NodeItem>
        ))}
      </ul>
    </section>
  );
});
