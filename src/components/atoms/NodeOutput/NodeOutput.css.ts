import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation/colors.css';


export const styles = {
  nodeOutput: style({
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
    fontWeight: 300,
  }),
};
