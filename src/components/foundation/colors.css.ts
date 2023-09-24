const grays = {
  gray100: '#edf2f7',
  gray200: '#e2e8f0',
  gray300: '#cbd5e0',
  gray400: '#a0aec0',
  gray500: '#718096',
  gray600: '#4a5568',
  gray700: '#2d3748',
  gray750: '#252C3A',
  gray800: '#1a202c',
  gray900: '#171923',
} as const;

const accents = {
  red: '#c53030',
  orange: '#dd6b20',
  yellow: '#d69e2e',
  green: '#38a169',
  teal: '#319795',
  blue300: '#63b3ed',
  blue: '#3182ce',
  blue600: '#2b6cb0',
  cyan: '#00a3c4',
  pink: '#ed64a6',
} as const;

const white = '#ffffff';
const black = '#000000';

export const colors = {
  ...grays,
  ...accents,
  white,
  black,
} as const;
