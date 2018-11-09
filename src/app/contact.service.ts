import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get(environment.backendUrl);
  }

  getContact(id){
    return this.http.get(`environment.backendUrl/${id}`)
  }
}