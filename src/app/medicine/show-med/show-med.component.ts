import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-med',
  templateUrl: './show-med.component.html',
  styleUrls: ['./show-med.component.css']
})
export class ShowMedComponent implements OnInit {

 

  constructor(private service:SharedService) { }

MedList:any[];
ModalTitle:string;
ActivateAddEditMedComp:boolean=false;
med:any;
  ngOnInit(): void {
    this.refreshMedList();
  }
  
  addClick(){
    this.med={
    MedicineId:0,
    MedicineName:"",
    City:"",
    UserName:"",
    PhoneNumber:"",
    Information:""
     }
     this.ModalTitle="AddMedicine";
     this.ActivateAddEditMedComp=true;
  }
  editClick(item){
    this.med=item;
    this.ModalTitle="EditMedicine";
    this.ActivateAddEditMedComp=true;
  }
  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteMed(item.MedicineId).subscribe(data=>{
        alert(data.toString());
        this.refreshMedList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditMedComp=false;
    this.refreshMedList();
  }
  refreshMedList(){
    this.service.getMedList().subscribe(data=>{
      this.MedList=data;
    })
  }
}
