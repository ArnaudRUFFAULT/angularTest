import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { ContactComponent } from "./list-contacts/contact/contact.component";
import { ListContactsComponent } from "./list-contacts/list-contacts.component";
import { AjoutContactComponent } from "./admin/ajout-contact/ajout-contact.component";

const routes: Routes = [
    {path: "admin/ajout-contact", component: AjoutContactComponent},
    {path: "contacts/:id", component: ContactComponent},
    {path: "contacts", component: ListContactsComponent},
    {path: "", pathMatch: 'full' , redirectTo: '/contacts'}
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }