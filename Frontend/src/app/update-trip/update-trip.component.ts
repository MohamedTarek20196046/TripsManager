import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripServiceService } from '../trip-service.service';
import { Trips } from '../trips';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {
  t: Trips = new Trips();
  constructor(private tservice: TripServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getTripById();
  }
    UpdateTrip(id?: Number)
    {
      console.log(this.t);
      this.tservice.updateTripById(this.t).subscribe();
      this.router.navigate(['Trip']) 
      
      
}
    getTripById()
    {
      this.tservice.getTripById().subscribe(data =>
        {
          this.t=data;
    });
    }
  

}
