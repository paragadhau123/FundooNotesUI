import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotesserviceService } from "../../Services/notesservice/notesservice.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  reset = true
  constructor(private note: NotesserviceService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  title = new FormControl();
  description = new FormControl();
  notePinned = false;
  card = false;
  reminder = false;

  addNote() {
    let noteData = {
      "title": this.title.value,
      "description": this.description.value
    }
    this.note.addNotes(noteData).subscribe(response => {
      if (response['status'].success == true) {
        this.snackBar.open("note added successfully", 'success')
      }
    },
      error => {
        this.snackBar.open("unable to add plz try again", 'failed')
      }
    )

  }

  changeNotePinned() {
    return this.notePinned = !this.notePinned
  }
}
