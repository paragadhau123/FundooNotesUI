import { Component, OnInit } from '@angular/core';
import { NotesserviceService } from '../../Services/notesservice/notesservice.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})

export class GetnotesComponent implements OnInit {
  note = []
  hoverIndex = -1
  constructor(private http: NotesserviceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.http.getNotes().subscribe(response => {
      this.note = response['data']
      this.note.reverse()
      console.log(this.note)
    })
  }








}