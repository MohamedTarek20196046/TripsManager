import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trips } from './trips';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {
  baseURL="https://back-end-crt-20196009-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/Trip"
  UpdateURL="https://back-end-crt-20196009-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/Admin"
  id?:Number;
  constructor(private httpClient: HttpClient) { }

  getAllTrips(): Observable<Trips[]>{
    return this.httpClient.get<Trips[]>(`${this.baseURL}/getall`);
  }

  addTrip(t?:Trips): Observable<object>
  {
    return this.httpClient.post<object>(`${this.baseURL}/add`,t);
  }
   
  getId(Id?: Number)
  {
    this.id=Id;
  }
  
  getTripById(): Observable<object>
  {
    console.log(`${this.id}`);
    return this.httpClient.get<object>(`${this.baseURL}/get/${this.id}`)
  }

  updateTripById(t?:Trips) : Observable<object>
  {
      return this.httpClient.put<object>(`${this.UpdateURL}/Update/Trip/${this.id}`,t)
  }
  deleteTripById() : Observable<object>
  {
     console.log(`${this.UpdateURL}/delete/Trip/${this.id}`)
      return this.httpClient.delete<object>(`${this.UpdateURL}/delete/Trip/${this.id}`)
  }
}
