import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-contact',
  templateUrl: './ajout-contact.component.html',
  styleUrls: ['./ajout-contact.component.css']
})
export class AjoutContactComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      prenom: ['', [
        Validators.pattern('[a-zA-Z\- ]*')
        ]],
      nom: ['',[
        Validators.pattern('[a-zA-Z\- ]*')
        ]],
      civilite: null,
      adresse1: ['',[
        Validators.pattern('[0-9a-zA-Z\- .,]*')
      ]],
      adresse2: '',
      cp: ['',[
        Validators.pattern('[0-9]*')
      ]],
      ville: ['',[
        Validators.pattern('[a-zA-Z\- ]*')
      ]],
      email: ['',[
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
        Validators.pattern('[0-9]*')
      ]]
    })
    this.telephonesForm.push(telephone);
  }

  supprimerTelephone(p){
    this.telephonesForm.removeAt(p);
  }

}
