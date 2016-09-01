import {Component} from "@angular/core"
import {NoteCard} from "./note-card"

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    directives: [NoteCard],
    styles: [require('./notes.css')]
})
export class Notes{}