import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Civilite } from '../civilite.enum';
import { TypeTelephone } from '../type-telephone';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contacts : Contact[];
    error :any ;
    displayedColumns: string[] = ['civilite', 'nom', 'prenom', 'detail'];
    constructor(private contactService : ContactService ){
    
    }

    ngOnInit(){
      this.refreshContacts();
    }

    refreshContacts(){
      this.contactService.getContacts().subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts.map(c => Contact.fromWsResponse(c))
        },
        error => this.error = error
      )
    }
}
