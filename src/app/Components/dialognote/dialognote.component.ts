import { Component, OnInit, Inject , Output, EventEmitter} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesserviceService } from "../../Services/notesservice/notesservice.service";
import { UtilityService } from "../../Services/utilityservice/utility.service";
import { DataserviceService } from "../../Services/dataservice/dataservice.service";
@Component({
  selector: 'app-dialognote',
  templateUrl: './dialognote.component.html',
  styleUrls: ['./dialognote.component.scss']
})

export class DialognoteComponent implements OnInit {
  title
  message
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NotesserviceService,private utility:UtilityService,private dataService:DataserviceService) { }
  ngOnInit(): void {
  }
  @Output() change1 = new EventEmitter<any>();
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
      // "color": this.data.color
    }
    console.log(noteData)
    this.noteService.updateNotes(noteData).subscribe(response => {
      this.dataService.changeMessage({});
     this.utility.displayMessage("Note is updated succesfully");
    },
      error => {
        this.utility.displayMessage("Note is not updated succesfully");
      }
    )
  }

}
