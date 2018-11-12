import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact : Contact;
  error : any;
  editModeNom = false;

  constructor(private contactService : ContactService, private route: ActivatedRoute, private router : Router ){
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

  supprimerContact(){
    this.contactService.deleteContactById(this.contact.id).subscribe(
      _=>this.router.navigate(['/contacts']),
      error => console.log(error)
    )
  }

  modeEditionNom(){
    this.editModeNom = !this.editModeNom;
  }

  modifierContact(){
    
  }

}
