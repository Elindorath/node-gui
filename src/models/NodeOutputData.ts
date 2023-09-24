import type { NodeIOType } from './NodeIO';

type NodeOutputDataParams = {
  label: string;
  type: NodeIOType;
  isForwardable: boolean;
};

export class NodeOutputData {
  label: string;
  type: NodeIOType;
  isForwardable: boolean;

  constructor({ label, type, isForwardable }: NodeOutputDataParams) {
    this.label = label;
    this.type = type;
    this.isForwardable = isForwardable;
  }
}
