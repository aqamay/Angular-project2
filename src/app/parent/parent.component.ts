import {Component, Input, OnInit} from '@angular/core';
import {Medicine} from '../shared/medicine';
import {Medicines} from '../shared/medicines';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  medicines = Medicines;
 
  constructor() { }

  ngOnInit(): void {
  }

}
