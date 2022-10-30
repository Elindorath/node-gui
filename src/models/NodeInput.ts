export class NodeInput {
  label: string;
  type: 'filePath' | 'color';
  value: unknown;
  isControllable: boolean;
  isCustomizable: boolean;

  isControlled = false;

  constructor({ label, type, isControllable, isCustomizable }) {
    if (!isControllable && !isCustomizable) {
      throw new Error('The NodeInput is neither controllable nor customizable');
    }

    this.label = label;
    this.type = type;
    this.isControllable = isControllable;
    this.isCustomizable = isCustomizable;
  }
}

/*
-------------|---|---|---|---
isControllable | 1 | 0 | 1 | 0
isCustomizable | 1 | 1 | 0 | 0
-------------|---|---|---|---
impossible   | - | - | - | Y
*/
