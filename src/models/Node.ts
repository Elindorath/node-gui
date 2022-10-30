import type { NodeInput } from './NodeInput';
import type { NodeOutput } from './NodeOutput';

export class Node {
  name: string;
  inputs: Array<NodeInput>;
  computeFunction: () => void;
  outputs: Array<NodeOutput>;

  constructor({ name, computeFunction, inputs, outputs }) {
    this.name = name;
    this.inputs = inputs;
    this.computeFunction = computeFunction;
    this.outputs = outputs;
  }
}
