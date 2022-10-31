import * as fs from 'fs/promises';

import { Node } from './Node';


export const nodeList = [
  {
    name: 'Load image',
    inputs: {
      filePath: {
        async action() {},
        async validate() {},
      },
    },
    async computeFunction(inputs) {
      const image = await fs.readFile(inputs.filePath);

      return {
        image,
      };
    },
    outputs: {
      image: {
        label: 'Image',
        type: 'file',
        transmissible: true,
      },
    },
  },
];
