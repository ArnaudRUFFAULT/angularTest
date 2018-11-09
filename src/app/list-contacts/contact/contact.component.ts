import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact : Contact;
  error : any;
  constructor(private contactService : ContactService, private route: ActivatedRoute ){
  }

  ngOnInit(){
    this.route.params.subscribe(
      p => {this.refreshContact(p.id)}
    ) 
  }

  refreshContact(p){
    this.contactService.getContact(p).subscribe(
      (c: any) =>  this.contact = Contact.fromWsResponse(c),
      error => this.error =error
    )
  }

}
