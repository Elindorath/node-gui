import type { NodeInputData } from './NodeInputData';
import type { NodeOutputData } from './NodeOutputData';


type NodeDataParams = {
  name: string;
  inputs: Array<NodeInputData>;
  computeFunction: () => void;
  outputs: Array<NodeOutputData>;
};

export class NodeData {
  name: string;
  inputs: Array<NodeInputData>;
  computeFunction: () => void;
  outputs: Array<NodeOutputData>;

  constructor({ name, computeFunction, inputs, outputs }: NodeDataParams) {
    this.name = name;
    this.inputs = inputs;
    this.computeFunction = computeFunction;
    this.outputs = outputs;
  }
}
