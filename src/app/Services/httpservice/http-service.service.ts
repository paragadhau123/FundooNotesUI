import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpclient: HttpClient) {

  }

  post(url, data, isHeaderRequired = false, headers = null) {
    return this.httpclient.post(url, data, isHeaderRequired && headers)
  }
 

}
