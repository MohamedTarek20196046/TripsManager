import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins-list/admins.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StationsListComponent } from './stations-list/stations-list.component';
import { TripsListComponent } from './trips-list/trips-list.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';

const routes: Routes = [
  
  {path : 'Trip',component: TripsListComponent},
  {path : 'home',component: HomeComponent},
  {path : 'Update-Trip',component: UpdateTripComponent},
  {path : 'station',component: StationsListComponent},
  {path : 'Admin',component: AdminsComponent},
  {path : 'SignUp',component: SignUpComponent},
  {path : 'SignIn',component: SignInComponent},
  {path : 'Update-Station',component: UpdateStationComponent},
  {path : 'Update-Admin',component: UpdateAdminComponent},
  {path: '',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
