import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { employee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http : HttpClient) { }
  url:string="http://localhost:3000";
  e:employee= new employee();
  getAllData(): Observable<any> 
  {
    return this.http.get(`${this.url}/posts`)
  }

  getData(empId:number): Observable<any>
  {
    return this.http.get<any>(`${this.url}/posts/${empId}`)
  }

  postData(data: any): Observable<any> 
  {
    return this.http.post(`${this.url}/posts`, data)
  }

  updateData(data: any): Observable<any> 
  {
    return this.http.put(`${this.url}/posts/${data.empId}`, data)
  }

  deleteData(empId: number): Observable<any>{
      return this.http.delete<any>(`${this.url}/posts/${empId}`)
  }
}
