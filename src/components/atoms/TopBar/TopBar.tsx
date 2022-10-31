import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { styles } from './TopBar.css';
// import { Colors } from 'components/foundation';
import { IconButton } from '../IconButton/IconButton';


export const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarLeft}>Logo</div>
      <div className={styles.topBarCenter}>
        <IconButton icon={solid('play')} />
      </div>
      <div className={styles.topBarRight}></div>
    </div>
  );
};
