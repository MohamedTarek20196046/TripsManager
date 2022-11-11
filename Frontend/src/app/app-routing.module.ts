import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminsComponent } from './admins-list/admins.component';


const routes: Routes = [
  {path : 'Trip',component: AppComponent},
  {path : 'Admin',component: AdminsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
