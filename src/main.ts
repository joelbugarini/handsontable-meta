import Utils from './utils';
import Handsontable from 'handsontable';

export class main {
    hot: Handsontable;
    numberOfColumns: number;
    numberOfRows: number;
    horizontalArray: Array<Cell>;
    verticalArray: Array<Cell>;
    colWidths: Array<number>;
    rowHeights: Array<number>;

    constructor(hot: Handsontable) {
        this.hot = hot;
        this.build();

        console.log(this.colWidths);    
    }
    build(){
        this.numberOfColumns = this.getNumberOfColumns();
        this.numberOfRows = this.getNumberOfRows();
        this.horizontalArray = this.getHorizontalArray();
        this.verticalArray = this.getVerticalArray();
        this.colWidths = this.getColWidths();
    }
    getNumberOfColumns(){        
        return this.hot.getData()[0].length;
    }
    getNumberOfRows(){
        return this.hot.getData().length;
    }
    getHorizontalArray(){
        let array:Array<Cell> = [];
        for(let c = 0; c < this.numberOfColumns; c++){
            array.push({column: c, row:0});
        }
        return array;
    }
    getVerticalArray(){
        let array:Array<Cell> = [];
        for(let c = 0; c < this.numberOfRows; c++){
            array.push({column: 0, row:c});
        }
        return array;
    }
    getColWidths(){
        let array: Array<number> = [];
        this.horizontalArray.forEach((cell:Cell)=>{
            array.push(this.hot.getColWidth(cell.column));
        });
        return array;
    }
}

interface Cell { column: number, row: number }


declare var window: Window;
interface Window { HandsontableMeta: typeof main; }
window.HandsontableMeta = main;
