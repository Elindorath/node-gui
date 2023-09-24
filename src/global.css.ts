import { globalStyle } from '@vanilla-extract/css';

import { colors } from 'components/foundation/colors.css';


const minHeightTrick = {
  minHeight: '100%',
  height: 0,
};

globalStyle('html', {
  fontSize: 10,
  ...minHeightTrick,
});

globalStyle('*', {
  padding: 0,
  margin: 0,
  borderWidth: 0,
  outline: 'none',
  appearance: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  fontFamily: 'sans-serif',
  fontSize: '1.6rem',
});

globalStyle('body', {
  backgroundColor: colors.gray900,
  color: colors.white,
  fontSize: '1.6rem',
  ...minHeightTrick,
});

globalStyle('#root', minHeightTrick);
