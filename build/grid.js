"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var row_1 = require('./row');
var header_1 = require('./header');
var Grid = (function () {
    function Grid() {
    }
    Grid.prototype.ngOnInit = function () {
        var width = document.querySelector('.ml-ng2-grid').offsetWidth;
        if (this.data && this.data[0] && !this.columnDefs) {
            this.columnDefs = Object.keys(this.data[0]).map(function (key) {
                return { field: key, name: key };
            });
        }
        var columnsCnt = this.columnDefs.length;
        var accumulatedWidth = 0;
        var accumulatedCnt = 0;
        this.columnDefs.forEach(function (one) {
            if (one['width'] != undefined) {
                accumulatedWidth += parseInt(one['width']);
                accumulatedCnt++;
            }
        });
        if (accumulatedCnt < columnsCnt) {
            this.columnDefs.forEach(function (one) {
                if (one['width'] == undefined) {
                    one['width'] = (width - accumulatedWidth) / (columnsCnt - accumulatedCnt) + 'px';
                }
            });
        }
    };
    Grid = __decorate([
        core_1.Component({
            inputs: ['columnDefs', 'data'],
            selector: 'ml-ng2-grid',
            directives: [row_1.Row, header_1.Header],
            template: "\n        <div class=\"ml-ng2-grid\">\n            <ml-ng2-grid-header [columnDefs]=\"columnDefs\"></ml-ng2-grid-header>\n            <div *ngFor=\"#row of data\" class=\"ml-ng2-grid-row\">\n                <ml-ng2-grid-row [columnDefs]=\"columnDefs\" [row]=\"row\"></ml-ng2-grid-row>\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Grid);
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map