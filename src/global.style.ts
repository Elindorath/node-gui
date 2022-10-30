import { css } from '@emotion/react';
import { colors } from 'components/foundation';


export const globalCss = css({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
  },
  html: {
    fontSize: 10,
    minHeight: '100%',
    height: 0,
  },
  body: {
    backgroundColor: colors.gray800,
    color: colors.white,
    fontSize: '1.6rem',
    minHeight: '100%',
    height: 0,
  },
  '#root': {
    minHeight: '100%',
    height: 0,
  },
});
