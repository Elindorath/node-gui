import { css } from '@emotion/react';


export const styles = {
  dragLayer: css({
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  }),
};
