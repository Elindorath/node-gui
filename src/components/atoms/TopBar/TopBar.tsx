import { BsPlayFill, BsGearFill } from 'react-icons/bs';

import { styles } from './TopBar.css';
import { Colors } from 'components/foundation';
import { IconButton } from '../IconButton/IconButton';


export const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLeft}>Logo</div>
      <div className={styles.topBarCenter}>
        <IconButton Icon={BsPlayFill} color={Colors.green} />
      </div>
      <div className={styles.topBarRight}>
        <IconButton Icon={BsGearFill} color={Colors.gray400} />
      </div>
    </div>
  );
};
