import { Component, Input, OnInit } from '@angular/core';
import { NotesserviceService } from "../../Services/notesservice/notesservice.service";
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})


export class IconsComponent implements OnInit {
  constructor(private noteService: NotesserviceService) { }
  @Input() noteObject
  ngOnInit(): void {
  }

  trashNote() {
    let noteData = {
      noteIdList: [this.noteObject.noteId]
    }
    console.log(noteData)
    this.noteService.deleteNotes(noteData).subscribe(response => {
      console.log(response)
    },
      error => {
        console.log(error)
      }
    )
  }
  getColor(color) {
    let noteColorData = {
      "color": color,
      "noteId": this.noteObject.noteId,
      "accountId":this.noteObject.accountId,
      "title":this.noteObject.title,
      "message":this.noteObject.message
    }
    this.noteService.updateNotes(noteColorData).subscribe(response => {
      console.log(response)
    },
      error => {
        console.log(error)
      }
    )
  }
  archiveNote() {
  }
  addNoteLable() {
  }
}