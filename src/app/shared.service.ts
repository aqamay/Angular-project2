
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="https://localhost:44308/api";
  constructor(private http:HttpClient) { }
  
  
  getMedList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/medicine');
  }
  addMed(val:any){
    return this.http.post(this.APIUrl+'/medicine',val);
  }
  updateMed(val:any){
    return this.http.put(this.APIUrl+'/medicine',val);
  }
  deleteMed(val:any){
    return this.http.delete(this.APIUrl+'/medicine/'+val);
  }
  GetAllTypes():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/medicine/GetAllTypes');
  }
}
