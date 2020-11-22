import { Component, OnInit } from '@angular/core';
import { NotesserviceService } from '../../Services/notesservice/notesservice.service';
import { UtilityService } from "../../Services/utilityservice/utility.service";

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
  note = []
  constructor(private noteService: NotesserviceService, private utility: UtilityService) { }

  ngOnInit(): void {
    this.archiveNotes()
  }

  archiveNotes(){
    this.noteService.getNotes().subscribe(response => {
      this.note = response['data'].filter(card=>card.isArchive && !card.isTrash)
      this.note.reverse()
    })
  }

  data: any;
  receive($event) {
    this.data = $event
    this.archiveNotes()
  }
}
