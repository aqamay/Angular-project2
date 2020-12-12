import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-med',
  templateUrl: './add-edit-med.component.html',
  styleUrls: ['./add-edit-med.component.css']
})


export class AddEditMedComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() med:any;
  MedicineId:string;
  MedicineName:string;
  City:string;
  UserName:string;
  PhoneNumber:number;
  Information:string;

  ngOnInit(): void {
    this.MedicineId=this.med.MedicineId;
    this.MedicineName=this.med.MedicineName;
    this.City=this.med.City;
    this.UserName=this.med.UserName;
    this.PhoneNumber=this.med.PhoneNumber;
    this.Information=this.med.Information;
    
  }
  addMed(){
 var val = {MedicineId:this.MedicineId,
  MedicineName:this.MedicineName,
  City:this.City,
  UserName:this.UserName,
  PhoneNumber:this.PhoneNumber,
  Information:this.Information};
  this.service.addMed(val).subscribe(res=>{
     alert(res.toString());
  });

  }
  
  updateMed(){
    var val = {MedicineId:this.MedicineId,
      MedicineName:this.MedicineName,
      City:this.City,
      UserName:this.UserName,
      PhoneNumber:this.PhoneNumber,
      Information:this.Information};
      this.service.updateMed(val).subscribe(res=>{
         alert(res.toString());
      });
}
}