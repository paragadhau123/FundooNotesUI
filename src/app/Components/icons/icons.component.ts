// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-icons',
//   templateUrl: './icons.component.html',
//   styleUrls: ['./icons.component.scss']
// })
// export class IconsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesserviceService } from '../../Services/notesservice/notesservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})


export class IconsComponent implements OnInit {
  constructor(private noteService: NotesserviceService, public snackBar: MatSnackBar) { }
  @Input() noteId
  labelName=new FormControl("")
  ngOnInit(): void {
  }

  trashNote() {
    let noteData = {
      isDeleted: true,
      noteIdList: [this.noteId]
    }
    // this.noteService.deleteNote(noteData).subscribe(response => {
    //   if (response['data'].success == true) {
    //     this.snackBar.open("note moved to bin", 'success')
    //     console.log(response)
    //     this.shared.sendEvent();
    //   }
    // },
    //   error => {
    //     this.snackBar.open("unable to move to bin plz try again", 'failed')
    //   }
    // )
  }

  archiveNote() {
    let noteData = {
      isArchived: true,
      noteIdList: [this.noteId]
    }
    // this.noteService.archiveNote(noteData).subscribe(response => {
    //   if (response['data'].success == true) {
    //     this.snackBar.open("note moved to archive", 'success')
    //     console.log(response)
    //     this.shared.sendEvent();
    //   }
    // },
    //   error => {
    //     this.snackBar.open("unable to move to archive plz try again", 'failed')
    //   }
    // )
  }

  addNoteLable() {
  let lableData={
    label:this.labelName.value,
    isDeleted:false
  }
  // this.noteService.addNoteLable(lableData,this.noteId).subscribe(response=>{
  //   if (response) {
  //     this.snackBar.open("note lable  added", 'success')
  //     console.log(response)
  //     this.shared.sendEvent();
  //   }
  // },
  //   error => {
  //     this.snackBar.open("unable to add to note lable plz try again", 'failed')
  //   }
  // )
  
  }
}
