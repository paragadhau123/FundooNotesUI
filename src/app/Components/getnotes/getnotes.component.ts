import { Component, Input, OnInit } from '@angular/core';
import { NotesserviceService } from '../../Services/notesservice/notesservice.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})

export class GetnotesComponent implements OnInit {
  note = []
  isButtonVisible = false
  hoverIndex = -1
  active: boolean
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

  displayPannel(i) {
    if (this.hoverIndex == i) {
      this.active = true
    }
    else {
      this.active = false
    }
  }

  noNote() {
    return (this.note.length == 0) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }
  

}