import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-contact',
  templateUrl: './ajout-contact.component.html',
  styleUrls: ['./ajout-contact.component.css']
})
export class AjoutContactComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService : ContactService, private router : Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      prenom: ['', [
        Validators.pattern('[a-zA-Z\- ]*')
        ]],
      nom: ['',[
        Validators.pattern('[a-zA-Z\- ]*')
        ]],
      civilite: null,
      adresseLigne1: ['',[
        Validators.pattern('[0-9a-zA-Z\- .,]*')
      ]],
      adresseLigne2: '',
      cp: ['',[
        Validators.pattern('^[0-9]{4,5}$')
      ]],
      ville: ['',[
        Validators.pattern('[a-zA-Z][a-zA-Z\- ]*[a-zA-Z]')
      ]],
      mail: ['',[
        Validators.email
      ]],
      telephones: this.formBuilder.array([])
    })
    this.ajouterTelephone();
  }

  get telephonesForm() {
    return this.form.get('telephones') as FormArray
  }

  ajouterTelephone() {
    const telephone = this.formBuilder.group({
      type: null,
      numero: ['',[
        Validators.pattern('^[0-9]{10}$')
      ]]
    })
    this.telephonesForm.push(telephone);
  }

  supprimerTelephone(p){
    this.telephonesForm.removeAt(p);
  }

  validForm(){
    if(this.form.valid){
      const contact : Contact = this.form.value as Contact;
      this.contactService.addContact(contact).subscribe(
        _ => this.router.navigate(['/contacts']),
        error=>console.log(error)
      );
    }
  }

}
