import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { ContactComponent } from './list-contacts/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AjoutContactComponent } from './admin/ajout-contact/ajout-contact.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ListContactsComponent,
    AjoutContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
