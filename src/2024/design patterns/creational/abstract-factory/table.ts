import { Dimension } from './dimensions';

export interface ITable {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimensions(): Dimension;
}

export class Table implements ITable {
  name = '';
  height = 0;
  width = 0;
  depth = 0;

  getDimensions(): Dimension {
    return {
      width: this.width,
      depth: this.depth,
      height: this.height,
    };
  }
}
