import type { ReactNode } from 'react';
import { NodeItem } from '../NodeItem/NodeItem';

import { styles } from './NodeItemList.style';


type Props<T> = {
  title: string;
  // items: Array<NodeInput | NodeOutput>;
  items: Array<T>;
  renderItem: (item: T) => ReactNode;
};

export function NodeItemList<T>({ title, items = [], renderItem = () => void 0 }: Props<T>) {
  return (
    <section css={styles.nodeItemListRoot}>
      <header css={styles.nodeItemListHeader}>{title}</header>
      <ul css={styles.nodeItemList}>
        {items.map((item, i) => (
          <NodeItem key={i}>
            {renderItem(item)}
          </NodeItem>
        ))}
      </ul>
    </section>
  );
}
