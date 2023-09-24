import { style } from '@vanilla-extract/css';
import { colors } from 'components/foundation/colors.css';


export const styles = {
  nodeHeader: style({
    fontSize: '1.3rem',
    borderBottomWidth: 2,
    borderBottomColor: colors.red,
    borderBottomStyle: 'solid',
    background: 'linear-gradient(90deg, #4E3545 0%, #2D3748 100%)',
    textTransform: 'uppercase',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6,
    paddingBottom: 6,
    textAlign: 'center',
    borderRadius: '8px 8px 0 0',
  }),
};
