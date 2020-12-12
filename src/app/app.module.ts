import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineComponent } from './medicine/medicine.component';

import { ShowMedComponent } from './medicine/show-med/show-med.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from  '@angular/common/http';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddEditMedComponent } from './medicine/add-edit-med/add-edit-med.component';

import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MedicineComponent,
    ShowMedComponent,
    AddEditMedComponent,
  
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
