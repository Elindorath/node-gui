import { colors } from 'components/foundation/colors.css';

export type NodeIOType = keyof typeof nodeIOColorMap;

export const nodeIOColorMap = {
  file: colors.red,
  color: colors.orange,
  multilineString: colors.green,
  string: colors.blue,
  directory: colors.pink,
  number: colors.yellow,
  undefined: colors.gray500,
};
