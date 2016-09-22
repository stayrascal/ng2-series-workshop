import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'app-bar',
    template: require('./app-bar.html'),
    styles: [require('./app-bar.css')],
    directives: [
        ...ROUTER_DIRECTIVES
    ]
})
export class AppBar {
}