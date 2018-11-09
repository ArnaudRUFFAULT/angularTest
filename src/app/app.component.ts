import { Component } from '@angular/core';
import { Contact } from './contact';
import { Civilite } from './civilite.enum';
import { TypeTelephone } from './type-telephone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    contact : Contact;
    constructor(){
      const contact: Contact = {
        prenom: 'Arnaud',
        nom: 'RUFFAULT',
        adresseLigne1: '1 rue des Lilas',
        civilite : Civilite.MONSIEUR,
        mail: 'arnaud.ruffault@gmail.com',
        ville: 'Montpellier',
        codePostal : 34000,
        telephones : [
          {numero : '0666456035', type : TypeTelephone.PORTABLE},
          {numero : '0478563219', type : TypeTelephone.FIXE}
        ]
      }
      console.log(contact);
    }
}
