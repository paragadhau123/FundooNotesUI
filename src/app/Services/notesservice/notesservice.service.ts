import { Injectable } from '@angular/core';
import { HttpServiceService } from "../httpservice/http-service.service";
import { environment } from "../../../environments/environment";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {

  constructor(private httpService: HttpServiceService) { }
  baseUrl = environment.baseUrl;

  addNotes(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('Token') }) }
    return this.httpService.post(`${this.baseUrl}Notes/AddNote`, data, true, options);
  }

  getNotes() {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('Token') }) }
    return this.httpService.get(`${this.baseUrl}Notes/DisplayNotes`, true, options)
  }

  updateNotes(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('Token') }) }
    return this.httpService.put(`${this.baseUrl}Notes/${data.noteId}`, data, true, options)
  }

  deleteNotes(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('Token') }) }
    return this.httpService.delete(`${this.baseUrl}Notes/${data.noteId}`, true, options)
  }
  
  trashNote(data){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('Token') }) }
    return this.httpService.post(`${this.baseUrl}Notes/${data.noteId}`,data ,true, options)
  }
   
  archiveNotes(data){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('Token') }) }
    return this.httpService.post(`${this.baseUrl}Notes/ArchiveNotes/${data.noteId}`,data,true, options)
  }
}
