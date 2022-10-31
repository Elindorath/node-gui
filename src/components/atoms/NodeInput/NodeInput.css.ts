import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation';


export const styles = {
  nodeInput: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 32,
    position: 'relative',
  }),
  nodeItemLabel: style({
    fontSize: '1.4rem',
  }),
  nodeItemHandle: style({
    height: 16,
    width: 16,
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: -8,
    // transform: 'translate(-50%, -50%)',
    backgroundColor: colors.red,
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.25), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: 0,
    cursor: 'default!important',
  }),
};
