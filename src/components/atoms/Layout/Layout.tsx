import { Flowchart } from '../Flowchart/Flowchart';
import { Menu } from '../Menu/Menu';
import { TopBar } from '../TopBar/TopBar';

import { styles } from './Layout.css';


export const Layout = () => {
  return (
    <>
      <TopBar />
      <div className={styles.layoutBody}>
        <Menu />
        <Flowchart />
      </div>
    </>
  );
};
