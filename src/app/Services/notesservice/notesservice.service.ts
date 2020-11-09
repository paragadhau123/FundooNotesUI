import { Injectable } from '@angular/core';
import { HttpServiceService } from "../httpservice/http-service.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {

  constructor(private httpService: HttpServiceService) { }
  baseUrl = environment.baseUrl;

  addNotes(data) {
    return this.httpService.post(`${this.baseUrl}Notes/AddNote`, data);
  }
}
