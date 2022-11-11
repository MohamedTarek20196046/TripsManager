import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminsComponent } from './admins-list/admins.component';
import { TripsListComponent } from './trips-list/trips-list.component';
import { UpdateTripComponent } from './update-trip/update-trip.component';
import { StationsListComponent } from './stations-list/stations-list.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UpdateStationComponent } from './update-station/update-station.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminsComponent,
    TripsListComponent,
    UpdateTripComponent,
    StationsListComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    UpdateStationComponent,
    UpdateAdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
