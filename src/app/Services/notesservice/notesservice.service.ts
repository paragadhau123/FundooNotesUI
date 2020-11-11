import { Injectable } from '@angular/core';
import { HttpServiceService } from "../httpservice/http-service.service";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {

  constructor(private httpService: HttpServiceService) { }
  baseUrl = environment.baseUrl;

  addNotes(data) {
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('Token') }) }
    return this.httpService.post(`${this.baseUrl}Notes/AddNote`, data,true,options);    
  }
  getNotes(){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('Token') }) }
    return this.httpService.get(`${this.baseUrl}Notes/DisplayNotes`,true,options)
  }
}
