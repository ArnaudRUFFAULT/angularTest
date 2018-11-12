import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(environment.backendUrl + '/contacts');
  }

  getContact(id){
    return this.http.get(environment.backendUrl + '/contacts/' + id);
  }

  addContact(contact){
    return this.http.post(environment.backendUrl + '/contacts', contact);
  }

  deleteContactById(id : number){
    return this.http.delete(environment.backendUrl + '/contacts/' + id);
  }
}
