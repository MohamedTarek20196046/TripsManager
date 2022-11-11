import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stations } from './stations';
@Injectable({
  providedIn: 'root'
})
export class StationserviceService {
  baseURL="http://localhost:8080/station"
  id?:Number;
  constructor(private httpClient: HttpClient) { }

  getAllStations(): Observable<Stations[]>{
    return this.httpClient.get<Stations[]>(`${this.baseURL}/getall`);
  }

  addStation(s?:Stations): Observable<object>
  {
    return this.httpClient.post<object>(`${this.baseURL}/add`,s);
  }

  getId(Id?: Number)
  {
    this.id=Id;
  }

  getStationById(): Observable<object>
  {
    console.log(`${this.id}`);
    return this.httpClient.get<object>(`${this.baseURL}/get/${this.id}`)
  }

  deleteStationById() : Observable<object>
  {
      console.log(`${this.baseURL}/delete/Trip/${this.id}`)
      return this.httpClient.delete<object>(`${this.baseURL}/delete/${this.id}`)
  }
  updateStationById(t?:Stations) : Observable<object>
  {
      return this.httpClient.put<object>(`${this.baseURL}/Update/${this.id}`,t)
  }
}
