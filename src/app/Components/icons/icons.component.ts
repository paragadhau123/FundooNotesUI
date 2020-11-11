import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})


export class IconsComponent implements OnInit {
  constructor() { }
  // @Input() noteId
  // labelName=new FormControl("")
  ngOnInit(): void {
  }

  trashNote() {
    
  }

  archiveNote() {
    
  }

  addNoteLable() { 
}
}