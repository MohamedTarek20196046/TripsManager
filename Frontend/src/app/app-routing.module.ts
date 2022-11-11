import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsListComponent } from './trips-list/trips-list.component';
import { AdminsComponent } from './admins-list/admins.component';
import { StationsListComponent } from './stations-list/stations-list.component';

const routes: Routes = [
  {path : 'Trip',component: TripsListComponent},
  {path : 'Admin',component: AdminsComponent},
  {path : 'station',component: StationsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
