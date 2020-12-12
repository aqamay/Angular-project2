import {Component, Input, OnInit} from '@angular/core';
import {Medicine} from '../shared/medicine';
import {Medicines} from '../shared/medicines';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() medicine: Medicine;
  isCollapsed = true;
  isChangedName = true;
  isChangedArea = true;
  isChangedInfo = true;

  constructor() {

  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
  toggleChangeName(): void {
    this.isChangedName = !this.isChangedName;
  }
  toggleChangeArea(): void {
    this.isChangedArea = !this.isChangedArea;
  }
  toggleChangeInfo(): void {
    this.isChangedInfo = !this.isChangedInfo;
  }

  ngOnInit(): void {
  }

  sendName(event: any): void{
    this.medicine.name = event.target.value;
    const result = event.target.value;
    this.medicine.name = result;
  }
 
  sendInfo(event: any): void{
    this.medicine.info = event.target.value;
    const result = event.target.value;
    this.medicine.info = result;
  }

}
