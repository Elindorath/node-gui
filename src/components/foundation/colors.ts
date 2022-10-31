import Color from 'colorjs.io';


// Color.prototype = {
//   ...Color.prototype,
//   cssInnerRgb(this: Color) {
//     return this.srgb.join(', ');
//   },
// } as unknown as typeof Color.prototype;

// type CC = ConstructorParameters<typeof Color>;
// type II = InstanceType<typeof Color>;

// class XColor extends Color {
//   constructor(...args: CC) {
//     super(...args);

//     const srgb = this.srgb;

//     this.srgb = srgb;
//     this.srgb.cssInner = srgb.join(', ');
//   }

//   cssInnerRgb() {
//     return this.srgb.join(', ');
//   }
// }

let t = 0;

t++;
console.log('T', t);

const grays = {
  gray100: '#edf2f7',
  gray200: '#e2e8f0',
  gray300: '#cbd5e0',
  gray400: '#a0aec0',
  gray500: '#718096',
  gray600: '#4a5568',
  gray700: '#2d3748',
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

// type Exported = {
//   [K in keyof typeof colors]: InstanceType<typeof Color>;
// };

// Object.entries(colors).reduce((_, [name, color]) => {
//   console.log(name, color);
// }, {});

const coco = {
  white: '#ffffff',
  black: '#000000',
};

const Y = [[1, 2], [3, 4]];

let OUH = Y.map((item) => item);

// let C = Object.entries(colors).reduce((exported, [name, color]) => ({}), {});
  // .reduce((exported, [name, color]) => {
  //   return {};
  //   // return {
  //   //   ...exported,
  //   //   [name]: new Color(color),
  //   // };
  // }, {});
