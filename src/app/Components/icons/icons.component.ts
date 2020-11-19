import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesserviceService } from "../../Services/notesservice/notesservice.service";
import {UtilityService  } from "../../Services/utilityservice/utility.service";
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {
  constructor(private noteService: NotesserviceService,private utility:UtilityService) { }
  @Input() noteObject

  @Output() change = new EventEmitter<any>();

  ngOnInit(): void {
  }

  trashNote() {
    let noteData = {
      noteIdList: [this.noteObject.noteId]
    }
    console.log(noteData)
    this.noteService.deleteNotes(noteData).subscribe(response => {
      this.change.emit();
      this.utility.displayMessage("Note Deleted Successfully");
    },
      error => {
        this.utility.displayMessage("Note Is Not Deleted Successfully");
      }
    )
  }

  getColor(color) {
    let noteColorData = {
      "color": color,
      "noteId": this.noteObject.noteId,
      "accountId": this.noteObject.accountId,
      "title": this.noteObject.title,
      "message": this.noteObject.message,
      "isArchive":this.noteObject.isArchive,
      "isTrash":this.noteObject.isTrash
    }
    this.noteService.updateNotes(noteColorData).subscribe(response => {
      this.change.emit();
      this.utility.displayMessage("Note Color Chnaged Successfully");
    },
      error => {
        this.utility.displayMessage("Note Color Not Chnaged Successfully");
      }
    )
  }
  archiveNote() {
  }
  addNoteLable() {
  }
}