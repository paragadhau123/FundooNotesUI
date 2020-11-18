import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() change = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  @Input() notesArray: any

  ngOnInit(): void {

  }

  displayNotes() {
    this.change.emit();
  }

  onHover(i) {
    this.hoverIndex = i
  }

  openDialog(title, message, noteId, accountId) {
    this.dialog.open(DialognoteComponent, { data: { title: title, message: message, noteId: noteId, accountId: accountId } });
    console.log(noteId);
  }

  noNote() {
    return (this.notesArray.length == 0) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }
  message: any;
  receive($event) {
    this.message = $event
    this.displayNotes();
  }
}
