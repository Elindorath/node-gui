import * as fs from 'fs/promises';

import { Node } from './Node';


export const nodeList = [
  {
    name: 'Load image',
    inputs: [],
    async computeFunction(inputs) {
      await fs.readFile();
    },
    outputs: [],
  },
];
