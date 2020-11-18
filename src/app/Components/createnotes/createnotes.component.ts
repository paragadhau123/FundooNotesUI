import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotesserviceService } from "../../Services/notesservice/notesservice.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  @Output() change = new EventEmitter<any>();

  reset = true
  constructor(private note: NotesserviceService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  title = new FormControl();
  message = new FormControl();
  color = new FormControl();
  notePinned = false;
  card = false;
  reminder = false;

  addNote() {
    let noteData = {
      "title": this.title.value,
      "message": this.message.value,
      "color": this.color.value
    }
    if (this.title.valid && this.message.valid ) {
      this.note.addNotes(noteData).subscribe(response => {
        this.change.emit();
        this.snackBar.open("Note added successfully", 'cancle')
      }, error => {
        this.snackBar.open("Note is not added succesfully", 'cancle')
      }
      )
    }
  }
  // changeNotePinned() {
  //   return this.notePinned = !this.notePinned
  // }
}
