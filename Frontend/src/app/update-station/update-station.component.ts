import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stations } from '../stations';
import { StationserviceService } from '../stationservice.service';

@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnInit {
  s: Stations = new Stations();
  constructor(private Stationservice: StationserviceService ,private router: Router) { }

  ngOnInit(): void {
    this.getStationById()
  }

  UpdateStation(id?: Number)
    {
      console.log(this.s);
      this.Stationservice.updateStationById(this.s).subscribe();
      this.router.navigate(['station']) 
      
      
}
  getStationById()
  {
    this.Stationservice.getStationById().subscribe(data =>
      {
        this.s=data;
  });
  }
}
