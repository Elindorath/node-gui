import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation/colors.css';


export const styles = {
  nodeItemListRoot: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  }),
  nodeItemListHeader: style({
    // paddingTop: 4,
    textAlign: 'center',
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    color: colors.gray400,
  }),
  nodeItemList: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    // paddingTop: 4,
  }),
};
