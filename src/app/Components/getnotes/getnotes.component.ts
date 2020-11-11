import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesserviceService } from "../../Services/notesservice/notesservice.service";
@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {

  constructor(private notes:NotesserviceService) { }

  
  note = [];

  displayNotes() {
    this.notes.getNotes().subscribe((result: any) => {
      this.note = result['data']
      console.log(this.note)
    },
      (error) => {
        console.log(error)
      })
  }
  ngOnInit(): void {
     this.displayNotes();
  }
}
