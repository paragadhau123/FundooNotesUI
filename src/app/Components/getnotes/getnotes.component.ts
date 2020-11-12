import { Component, OnInit } from '@angular/core';
import { NotesserviceService } from '../../Services/notesservice/notesservice.service';
import { MatDialog } from '@angular/material/dialog';
import { DialognoteComponent } from '../dialognote/dialognote.component';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})

export class GetnotesComponent implements OnInit {
  note = []
  hoverIndex = -1
  nonoteCondition = false
  constructor(private http: NotesserviceService, public dialog: MatDialog) {   
  }

  ngOnInit(): void {
    this.http.getNotes().subscribe(response => {         
      this.note = response['data']    
      this.note.reverse()
      console.log(this.note)
    })

  }

  onHover(i) {
    this.hoverIndex = i
  }

  

  noNote() {
    return (this.note.length == 0) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }
  
  openDialog(title, message, noteId) {
    this.dialog.open(DialognoteComponent, { data: { title: title, message: message, noteId: noteId} });
  }
}