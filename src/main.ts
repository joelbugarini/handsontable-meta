import Utils from './utils';
import Handsontable from 'handsontable';

export class main {
    hot: Handsontable;

    constructor(hot: Handsontable) {
        this.hot = hot;
    }
    getSettings(){
        return {
            colWidths: this.getColWidths(),
            rowHeights:this.getRowHeights()
        }
    }
    getNumberOfColumns(){        
        return this.hot.getData()[0].length;
    }
    getNumberOfRows(){
        return this.hot.getData().length;
    }
    getHorizontalArray(){
        let array:Array<Cell> = [];
        for(let c = 0; c < this.getNumberOfColumns(); c++){
            array.push({column: c, row:0});
        }
        return array;
    }
    getVerticalArray(){
        let array:Array<Cell> = [];
        for(let c = 0; c < this.getNumberOfRows(); c++){
            array.push({column: 0, row:c});
        }
        return array;
    }
    getColWidths(){
        let array: Array<number> = [];
        this.getHorizontalArray().forEach((cell:Cell)=>{
            array.push(this.hot.getColWidth(cell.column));
        });
        return array;
    }
    getRowHeights(){
        let array: Array<number> = [];
        this.getVerticalArray().forEach((cell:Cell)=>{
            array.push(this.hot.getRowHeight(cell.row)||23);
        });
        return array;
    }
}

interface Cell { column: number, row: number }


declare var window: Window;
interface Window { HandsontableMeta: typeof main; }
window.HandsontableMeta = main;
