import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admins } from './admins';
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  baseURL="http://localhost:8080/Admin"
  id?:Number;
  
  temp?:Number;
 
  constructor(private httpClient: HttpClient) { }
  getAllAdmins(): Observable<Admins[]>{
    return this.httpClient.get<Admins[]>(`${this.baseURL}/getall`);
  }

  SignUp(a?:Admins): Observable<object>
  {
    return this.httpClient.post<object>(`${this.baseURL}/SignUp`,a);
  }

  SignIn(a?:Admins): Observable<object>
  {
    return this.httpClient.post<object>(`${this.baseURL}/SignIn`,a);
  }

  getId(Id?: Number)
  {
    this.id=Id;
  }

  getAdminById(): Observable<object>
  {
    console.log(`${this.id}`);
    return this.httpClient.get<object>(`${this.baseURL}/get/${this.id}`)
  }

  deleteAdminById() : Observable<object>
  {
      console.log(`${this.baseURL}/${this.id}`)
      return this.httpClient.delete<object>(`${this.baseURL}/delete/${this.id}`)
  }
  updateAdminById(t?:Admins) : Observable<object>
  {
      return this.httpClient.put<object>(`${this.baseURL}/Update/${this.id}`,t)
  }

  SetTemp(t ?:Number)
  {
    this.temp=t;
  }
  
}
