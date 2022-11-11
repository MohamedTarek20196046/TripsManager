import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsListComponent } from './trips-list/trips-list.component';
import { AdminsComponent } from './admins-list/admins.component';
import { StationsListComponent } from './stations-list/stations-list.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateStationComponent } from './update-station/update-station.component';
const routes: Routes = [
  {path : 'Trip',component: TripsListComponent},
  {path : 'Admin',component: AdminsComponent},
  {path : 'station',component: StationsListComponent},
  {path : 'Update-Trip',component: UpdateTripComponent},
  {path : 'Update-Station',component: UpdateStationComponent},
  {path : 'Update-Admin',component: UpdateAdminComponent},
  {path : 'home',component: HomeComponent},
  {path: '',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
