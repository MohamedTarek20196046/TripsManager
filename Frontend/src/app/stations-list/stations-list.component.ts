import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { Stations } from '../stations';
import { StationserviceService } from '../stationservice.service';

@Component({
  selector: 'app-stations-list',
  templateUrl: './stations-list.component.html',
  styleUrls: ['./stations-list.component.css']
})
export class StationsListComponent implements OnInit {
  stations ?: Stations[];
  s: Stations = new Stations();
  constructor(private Stationservice: StationserviceService ,private router: Router,private adminservice: AdminserviceService  ) { }

  ngOnInit(): void {
    this.adminservice.unlock()
    this.getAllStations();
  }

  getAllStations()
  {
    this.Stationservice.getAllStations().subscribe(data=>{
      this.stations = data;
    })
  }
  addStation()
  {
    console.log(this.s);
    this.Stationservice.addStation(this.s).subscribe();
    window.location.reload();
  }
  Delete(id?: Number)
  {
    console.log("id:"+ id);
    this.Stationservice.getId(id);
    this.Stationservice.deleteStationById().subscribe();
    this.router.navigate(['station']);
    window.location.reload();
  }
  Update(id?: Number)
  {
    console.log("id:"+ id);
    this.Stationservice.getId(id);
    this.router.navigate(['Update-Station']);

  }
}
