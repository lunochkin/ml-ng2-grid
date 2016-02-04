import {Component} from 'angular2/core';
import {Row} from './row';
import {Header} from './header';

@Component({
    inputs: ['columnDefs', 'data'],
    selector: 'ml-ng2-grid',
    directives: [Row, Header],
    template: `
        <div class="ml-ng2-grid">
            <ml-ng2-grid-header [columnDefs]="columnDefs"></ml-ng2-grid-header>
            <div *ngFor="#row of data" class="ml-ng2-grid-row">
                <ml-ng2-grid-row [columnDefs]="columnDefs" [row]="row"></ml-ng2-grid-row>
            </div>
        </div>
    `
})
export class Grid {
    columnDefs: any;
    data: any;
    constructor() {

    }
    ngOnInit() {
        var width = document.querySelector('.ml-ng2-grid').offsetWidth;

        if (this.data && this.data[0] && !this.columnDefs) {
            this.columnDefs = Object.keys(this.data[0]).map(function(key) {
                return {field: key, name: key};
            });
        }

        var columnsCnt = this.columnDefs.length;

        var accumulatedWidth = 0;
        var accumulatedCnt = 0;
        this.columnDefs.forEach(function(one) {
            if (one['width'] != undefined) {
                accumulatedWidth += parseInt(one['width']);
                accumulatedCnt++;
            }
        });

        if (accumulatedCnt < columnsCnt) {
            this.columnDefs.forEach(function(one) {
                if (one['width'] == undefined) {
                    one['width'] = (width - accumulatedWidth) / (columnsCnt - accumulatedCnt) + 'px';
                }
            });
        }
    }
}