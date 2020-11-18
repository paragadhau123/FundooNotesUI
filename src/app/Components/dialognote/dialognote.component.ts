import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesserviceService } from "../../Services/notesservice/notesservice.service";
@Component({
  selector: 'app-dialognote',
  templateUrl: './dialognote.component.html',
  styleUrls: ['./dialognote.component.scss']
})
export class DialognoteComponent implements OnInit {
  title
  message
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NotesserviceService) { }

  ngOnInit(): void {
  }

  changeMessage(value) {
    this.message = value
  }

  changeTitle(value) {
    this.title = value
  }

  updateNote() {
    let noteData = {
      "noteId": this.data.noteId,
      "accountId": this.data.accountId,
      "title": this.title,
      "message": this.message,
      // "color": this.color
    }
    console.log(noteData)
    this.noteService.updateNotes(noteData).subscribe(response => {
      console.log(response)
    },
      error => {
        console.log(error)
      }
    )
  }

}
