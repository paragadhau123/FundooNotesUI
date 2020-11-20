import { Component, OnInit } from '@angular/core';
import { NotesserviceService } from '../../Services/notesservice/notesservice.service';
import { UtilityService } from "../../Services/utilityservice/utility.service";

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent implements OnInit {
  note = []

  constructor(private noteService: NotesserviceService, private utility: UtilityService) { }

  ngOnInit(): void {
    this.trashNotes()
  }

  trashNotes(){
    this.noteService.getNotes().subscribe(response => {
      this.note = response['data'].filter(card=>!card.isArchive && card.isTrash)
      this.note.reverse()
      // this.utility.displayMessage("Trash Notes Displayed Succesfully")
    })
  }

  data: any;
  receive($event) {
    this.data = $event
    this.trashNotes()
  }

}
