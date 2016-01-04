import {Component} from 'angular2/core';

@Component({
    inputs: ['columns', 'data'],
    selector: 'ml-ng2-grid',
    directives: [],
    template: `
        <div>
            <div *ngFor="#row of data">
                <div *ngFor="#column of columns">{{row[column.code]}}</div>
            </div>
        </div>
    `
})
export class Grid {
    columns: any;
    data: any;
    constructor() {
    }
}