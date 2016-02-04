import {Component} from 'angular2/core';

@Component({
    inputs: ['columnDefs'],
    selector: 'ml-ng2-grid-header',
    directives: [],
    template: `
        <div class="ml-ng2-grid-header">
            <div class="ml-ng2-grid-header-row">
                <div *ngFor="#columnDef of columnDefs" class="ml-ng2-grid-header-cell" [style.width]="columnDef.width">{{columnDef.name}}</div>
            </div>
        </div>
    `
})
export class Header {
    columnDefs: any;
    constructor() {
    }
}