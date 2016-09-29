import {Component} from "@angular/core";
import {NoteCard} from "./note-card";
import {NoteCreator} from "./note-creator";
import {NoteService} from "../../shared/services/notes";

@Component({
    selector: 'notes',
    template: require('./notes.html'),
    directives: [NoteCard, NoteCreator],
    styles: [require('./notes.css')]
})

export class Notes {
    notes = [];

    constructor(private notesService: NoteService){
        this.notesService.getNotes().subscribe(res => this.notes = res.data)
    }

    checkCard(note, id) {
        this.notesService.delete(note).subscribe(returnNote => {
            let index = this.notes.findIndex(localNote => localNote.id === note.id);
            this.notes.splice(index, 1)
        })
    }

    addNote(note) {
        this.notesService.createNote(note).subscribe(note => {
            this.notes.push(note);
        })
    }

}