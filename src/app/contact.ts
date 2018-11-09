import { Civilite } from "./civilite.enum";
import { Telephone } from "./telephone";
import { TypeTelephone } from "./type-telephone";

export class Contact {
    id?: number;
    prenom : string;
    nom : string;
    civilite : Civilite;
    adresseLigne1 : string;
    adresseLigne2? : string;
    codePostal : number;
    ville : string;
    mail : string;
    telephones : Telephone[];

    static fromWsResponse(contact: any): Contact {
        contact.civilite = Civilite[contact.civilite]
        contact.telephones = contact.telephones.map(
            t => {
                t.type = TypeTelephone[t.type]
                return t
            }
        )
        return contact
    }
}
