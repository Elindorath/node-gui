import * as fs from 'fs/promises';
import path from 'path';
import { NodeData } from './NodeData';


export type NodeType = keyof typeof nodeList;

export const nodeList = {
  loadFile: {
    label: 'Load file',
    type: 'loadFile',
    inputs: [
      {
        label: 'File',
        key: 'filepath',
        type: 'file',
        isCustomizable: true,
      },
    ],
    // async isValid(filepath) {
    //   const content = await fs.readFile(filepath);
    //   const json = JSON.parse(content.toString());
    // },
    // async computeFunction(filepath) {
    //   const content = await fs.readFile(filepath);
    //   const json = JSON.parse(content.toString());

    //   return {
    //     content: json,
    //     directory: path.dirname(filepath),
    //     filename: path.basename(filepath),
    //   };
    // },
    outputs: [
      {
        label: 'Content',
        key: 'content',
        type: 'string',
        isForwardable: true,
      },
      {
        label: 'File directory',
        key: 'directory',
        type: 'directory',
        isForwardable: true,
      },
      {
        label: 'File name',
        key: 'filename',
        type: 'string',
        isForwardable: true,
      },
    ],
  },
  saveFile: {
    label: 'Save file',
    type: 'saveFile',
    inputs: [
      {
        label: 'Content',
        key: 'content',
        type: 'string',
        isControllable: true,
      },
      {
        label: 'Base directory',
        key: 'directory',
        type: 'directory',
        isControllable: true,
      },
      {
        label: 'File name',
        key: 'filename',
        type: 'string',
        isControllable: true,
      },
    ],
    outputs: [],
  },
  postgres: {
    label: 'PostgreSQL database',
    type: 'database',
    inputs: [
      {
        label: 'Host',
        key: 'host',
        type: 'string',
        isCustomizable: true,
      },
      {
        label: 'Port',
        key: 'port',
        type: 'number',
        isCustomizable: true,
      },
      {
        label: 'User',
        key: 'user',
        type: 'string',
        isCustomizable: true,
      },
      {
        label: 'Password',
        key: 'password',
        type: 'string',
        isCustomizable: true,
      },
      {
        label: 'Database',
        key: 'database',
        type: 'string',
        isCustomizable: true,
      },
    ],
    outputs: [
      {
        label: 'Table list',
        key: 'tables',
        type: 'string',
        isForwardable: true,
      },
    ],
  },
};
