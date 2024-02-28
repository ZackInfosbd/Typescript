import { Dimension } from './dimensions';

export interface IChair {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimensions(): Dimension;
}

export class Chair implements IChair {
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
