import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation';


export const styles = {
  nodeItemListRoot: style({
  }),
  nodeItemListHeader: style({
    paddingTop: 8,
    textAlign: 'center',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    color: colors.gray400,
  }),
  nodeItemList: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    paddingTop: 8,
  }),
};
