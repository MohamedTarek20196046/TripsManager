import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { TripServiceService } from '../trip-service.service';
import { Trips } from '../trips';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {
  trips ?: Trips[];
  t: Trips = new Trips();
  constructor(private tservice: TripServiceService ,private router: Router, private adminservice: AdminserviceService) { }

  ngOnInit(): void {
    this.adminservice.unlock()
    this.getAllTrips();
  }
  getAllTrips()
  {
    this.tservice.getAllTrips().subscribe(data=>{
      this.trips = data;
    })
  }
  addTrip()
  {
    console.log(this.t);
    this.tservice.addTrip(this.t).subscribe();
    window.location.reload();
  }
  Update(id?: Number)
  {
    console.log("id:"+ id);
    this.tservice.getId(id);
    this.router.navigate(['Update-Trip']);

  }
  Delete(id?: Number)
  {
    console.log("id:"+ id);
    this.tservice.getId(id);
    this.tservice.deleteTripById().subscribe();
    this.router.navigate(['Trip']);
    window.location.reload();
    
   

  }

}
