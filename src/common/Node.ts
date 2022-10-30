export interface Node {
  inputs: Array<NodeInput>;
  outputs: Array<NodeOutput>;
  computeFunction: () => void;
  name: string;
}

export interface NodeInput {
  controllable: boolean;
  type: 'filePath' | 'color';
  label: string;
}

export interface NodeOutput {
  type: 'filePath';
  transmissible: boolean;
}
