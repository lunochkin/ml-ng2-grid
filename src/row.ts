import {Component} from 'angular2/core';

@Component({
    inputs: ['row', 'columnDefs'],
    selector: 'ml-ng2-grid-row',
    directives: [],
    template: `
        <div *ngFor="#columnDef of columnDefs" class="ml-ng2-grid-cell" [style.width]="columnDef.width">
            <div *ngIf="columnDef.html" [innerHtml]="row[columnDef.field]"></div>
            <div *ngIf="!columnDef.html">{{row[columnDef.field]}}</div>
        </div>
    `
})
export class Row {
    row: any;
    columnDefs: any;
    constructor() {
    }
}