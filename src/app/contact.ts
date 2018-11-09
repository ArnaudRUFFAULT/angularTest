import { Civilite } from "./civilite.enum";
import { Telephone } from "./telephone";

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
}
