import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotesserviceService } from "../../Services/notesservice/notesservice.service";
import { UtilityService } from "../../Services/utilityservice/utility.service";

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {

  @Output() change1 = new EventEmitter<any>();

  reset = true
  constructor(private note: NotesserviceService, private utility: UtilityService) { }

  ngOnInit(): void {
  }
  title = new FormControl();
  message = new FormControl();
  notePinned = false;
  card = false;
  reminder = false;

  addNote() {
    let noteData = {
      "title": this.title.value,
      "message": this.message.value
    }
    if (this.title.valid && this.message.valid) {
      this.note.addNotes(noteData).subscribe(response => {
        this.change1.emit();
        this.utility.displayMessage("Note added successfully")
      }, error => {
        this.utility.displayMessage("Note is not added succesfully")
      }
      )
    }
  }
}
