import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation/colors.css';


export const styles = {
  wrapper: style({
    flexGrow: 1,
    height: '100%',
    position: 'relative',
  }),
  flowchart: style({
    zIndex: 1,
    borderRadius: 8,
  }),
  background: style({
    backgroundColor: colors.gray800,
  }),
  overlay: style({
    boxShadow: `0 0 8px 8px ${colors.gray800} inset`,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    borderRadius: 8,
    pointerEvents: 'none',
  }),
};
