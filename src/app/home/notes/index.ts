import {Component} from "@angular/core";
import {NoteCard} from "./note-card";
import {NoteCreator} from "./note-creator";

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    directives: [NoteCard, NoteCreator],
    styles: [require('./notes.css')]
})

export class Notes {
    notes = [{
        title: 'This is Title',
        value: 'This is Value',
        color: 'white'
    }, {
        title: 'This is Title2',
        value: 'This is Value2',
        color: 'white'
    }, {
        title: 'This is Title3',
        value: 'This is Value3',
        color: 'white'
    }]

    checkCard(note, i) {
        this.notes.splice(i, 1)
    }

    addNote(note) {
        this.notes.push(note)
    }

}