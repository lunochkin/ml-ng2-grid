import {Component} from 'angular2/core';

@Component({
    selector: 'ml-ng2-grid',
    directives: [],
    template: `
        <div>{{msg}}, World!</div>
    `
})
export class Grid {
    private msg: string;
    constructor() {
        this.msg = 'Hello';
    }
}