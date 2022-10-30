export class NodeOutput {
  label: string;
  type: 'filePath' | 'color';
  isForwardable: boolean;

  constructor({ label, type, isForwardable }) {
    this.label = label;
    this.type = type;
    this.isForwardable = isForwardable;
  }
}
