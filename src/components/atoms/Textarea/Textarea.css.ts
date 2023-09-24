import { style } from '@vanilla-extract/css';

import { colors } from 'components/foundation/colors.css';


export const styles = {
  textarea: style({
    width: '100%',
    outlineWidth: 1,
    outlineStyle: 'solid',
    outlineColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255,0.8)',
    fontSize: '1.2rem',
    fontWeight: 300,
    transition: 'ease-in 80ms',
    resize: 'none',

    ':hover': {
      outlineColor: 'rgba(255, 255, 255, 0.4)',
    },

    ':focus-within': {
      outlineWidth: 2,
      outlineColor: colors.blue300,
      transition: 'ease-out 80ms',
    },

    '::placeholder': {
      color: 'rgba(255, 255, 255, 0.2)',
    },
  }),
};
