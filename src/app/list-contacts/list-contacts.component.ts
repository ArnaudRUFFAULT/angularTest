import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Civilite } from '../civilite.enum';
import { TypeTelephone } from '../type-telephone';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contacts: MatTableDataSource<Contact>;
  error: any;
  displayedColumns: string[] = ['civilite', 'nom', 'prenom', 'detail'];
  constructor(private contactService: ContactService) {

  }

  ngOnInit() {
    this.refreshContacts();
  }

  applyFilter(filterValue: string) {
    this.contacts.filter = filterValue.trim().toLowerCase();
  }

  refreshContacts() {
    this.contactService.getContacts().subscribe(
      (contacts: Contact[]) => {
        this.contacts = new MatTableDataSource(contacts.map(c => Contact.fromWsResponse(c)))
      },
      error => this.error = error
    )
  }
}
