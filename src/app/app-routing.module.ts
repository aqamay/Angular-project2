import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicineComponent} from './medicine/medicine.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [
  {path:'medicine',component:MedicineComponent},
  {path:'parent',component:ParentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

