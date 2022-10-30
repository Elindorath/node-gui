import { Handle } from 'reactflow';

import { Curve } from '../Curve/Curve';

import { styles } from './Handle.style';

export const Handle = () => {
  return (
    <div css={styles.handle}>
      <Curve />
    </div>
  );
};
