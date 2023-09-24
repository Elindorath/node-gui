import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from 'components/foundation/colors.css';


const label = recipe({
  base: {
    outlineWidth: 1,
    outlineStyle: 'solid',
    outlineColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    width: '100%',
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    transition: 'ease-in 80ms',

    ':hover': {
      outlineColor: 'rgba(255, 255, 255, 0.4)',
    },

    ':focus-within': {
      outlineWidth: 2,
      outlineColor: colors.blue300,
      transition: 'ease-out 80ms',
    },
  },
  variants: {
    file: {
      true: { cursor: 'pointer' },
      false: { cursor: 'default' },
    },
  },
});

export const styles = {
  label,
  icon: style({}),
  input: style({
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1.2rem',
    fontWeight: 300,
    lineHeight: '32px',
    flexGrow: 1,

    '::placeholder': {
      color: 'rgba(255, 255, 255, 0.2)',
      fontWeight: 300,
    },
  }),
  filePlaceholder: style({
    fontSize: '1.2rem',
    fontWeight: 300,
    lineHeight: '32px',
    flexGrow: 1,
    color: 'rgba(255, 255, 255, 0.2)',
  }),
};
