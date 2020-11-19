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
    let noteColorData = {
      "noteId": this.noteObject.noteId
    }
    this.noteService.trashNote(noteColorData).subscribe(response =>{
      if(this.noteObject.isTrash==true){
        this.utility.displayMessage("Note is Untrashed succesfully");
      }
     else{
      this.utility.displayMessage("Note is trashed succesfully");
     }
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
    }
    )
  }
  archiveNote() {
    let noteColorData = {
      "noteId": this.noteObject.noteId
    }
    this.noteService.archiveNotes(noteColorData).subscribe(response =>{
      if(this.noteObject.isArchive==true){
        this.utility.displayMessage("Note is Unrchived succesfully");
      }
      else{
        this.utility.displayMessage("Note is Archived succesfully");
      }
    }
    )
  }
  addNoteLable() {
  }
}