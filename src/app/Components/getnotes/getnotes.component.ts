import { Component, OnInit } from '@angular/core';
import { NotesserviceService } from '../../Services/notesservice/notesservice.service';
import { UtilityService } from "../../Services/utilityservice/utility.service";
import { DataserviceService } from "../../Services/dataservice/dataservice.service";
@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})

export class GetnotesComponent implements OnInit {
  note = []
  hoverIndex = -1

  constructor(private noteService: NotesserviceService, private utility: UtilityService,private data1:DataserviceService) {
  }

  data: any;
  receive($event) {
    this.data = $event
    this.getNotes()
  }

  getNotes() {
    this.noteService.getNotes().subscribe(response => {
      this.note = response['data']
      this.note.reverse()
      this.utility.displayMessage("Notes Displayed Succesfully")
    })
  }

  ngOnInit(): void {
    this.data1.currentMessage.subscribe(data=>{ this.getNotes()});
    this.getNotes()
  }









}