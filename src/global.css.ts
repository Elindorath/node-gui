import { globalStyle } from '@vanilla-extract/css';

// import { colors } from 'components/foundation';


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
  appearance: 'none',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  fontFamily: 'sans-serif',
});

globalStyle('body', {
  // backgroundColor: colors.gray800,
  // color: colors.white,
  fontSize: '1.6rem',
  ...minHeightTrick,
});

globalStyle('#root', minHeightTrick);

// export const globalCss = css({
//   '*': {
//     margin: 0,
//     padding: 0,
//     border: 'none',
//     boxSizing: 'border-box',
//     fontFamily: 'sans-serif',
//   },
//   html: {
//     fontSize: 10,
//     minHeight: '100%',
//     height: 0,
//   },
//   body: {
//     backgroundColor: colors.gray800,
//     color: colors.white,
//     fontSize: '1.6rem',
//     minHeight: '100%',
//     height: 0,
//   },
//   '#root': {
//     minHeight: '100%',
//     height: 0,
//   },
//   button: {
//     appearance: 'none',
//     backgroundColor: 'transparent',
//   },
// });
