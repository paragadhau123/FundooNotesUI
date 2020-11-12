import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialognoteComponent } from '../dialognote/dialognote.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  hoverIndex = -1
  nonoteCondition = false
  constructor( public dialog: MatDialog) { }
  @Input() notesArray:any
  ngOnInit(): void {
  }
  onHover(i) {
    this.hoverIndex = i
  }
  openDialog(title, message, noteId) {
    this.dialog.open(DialognoteComponent, { data: { title: title, message: message, noteId: noteId} });
  }
  noNote() {
    return (this.notesArray.length == 0) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }
}
