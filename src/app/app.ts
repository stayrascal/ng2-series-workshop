import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AppBar} from "./shared/app-bar";

@Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [...ROUTER_DIRECTIVES, AppBar]
})

export class App {

}
