import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation/colors.css';


const itemWrapper = style({
  paddingInlineStart: 6,
  borderRadius: 8,
  backgroundColor: colors.red,
});

export const styles = {
  menu: style({
    borderRadius: 8,
    inlineSize: 250,
    backgroundColor: colors.gray800,
  }),
  header: style({
    color: colors.blue300,
    borderBlockEndStyle: 'solid',
    borderBlockEndWidth: 2,
    borderBlockEndColor: colors.blue300,
    blockSize: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  body: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    paddingInline: 16,
    paddingBlock: 16,
  }),
  itemWrapper,
  item: style({
    display: 'flex',
    inlineSize: '100%',
    blockSize: 28,
    alignItems: 'center',
    justifyContent: 'left',
    paddingInline: 16,
    whiteSpace: 'nowrap',
    backgroundColor: colors.gray700,
    fontSize: '1.3rem',
    textTransform: 'uppercase',
    borderRadius: 8,
    position: 'relative',
  }),
  itemBorder: style({
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.gray700,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    selectors: {
      [`${itemWrapper}:hover &`]: {
        borderColor: colors.red,
      },
    },
  }),
};
