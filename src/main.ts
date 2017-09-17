import Utils from './utils';
import Handsontable from 'handsontable';

export class main {
    hot: Handsontable;
    constructor(hot: Handsontable) {
        this.hot = hot;
    }
    getLength(){
        console.log(this.hot);
        
        return this.hot;
    }
}

declare var window: Window;
interface Window { HandsontableMeta: typeof main; }
window.HandsontableMeta = main;
