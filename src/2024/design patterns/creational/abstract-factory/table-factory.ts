import BigTable from './big-table';
import MediumTable from './big-table';
import SmallTable from './small-table';
import { ITable } from './table';

export default class TableFactory {
  static getTable(table: string): ITable {
    if (table === 'BigTable') {
      return new BigTable();
    } else if (table === 'MediumTable') {
      return new MediumTable();
    } else if (table === 'SmallTable') {
      return new SmallTable();
    } else {
      throw new Error('No Table Found');
    }
  }
}
