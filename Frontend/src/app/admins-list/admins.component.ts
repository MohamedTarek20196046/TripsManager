import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admins } from '../admins';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  constructor(private adminservice: AdminserviceService ,private router: Router) { }
  admins ?: Admins[];
  a: Admins = new Admins();
  ngOnInit(): void {
    this.adminservice.unlock()
    this.getAllAdmins()
  }

  getAllAdmins()
  {
    this.adminservice.getAllAdmins().subscribe(data=>{
      this.admins = data;
    })
  }

  Delete(id?: Number)
  {
    console.log("id:"+ id);
    this.adminservice.getId(id);
    this.adminservice.deleteAdminById().subscribe();
    this.router.navigate(['Admin']);
    window.location.reload();
  }
  Update(id?: Number)
  {
    console.log("id:"+ id);
    this.adminservice.getId(id);
    this.router.navigate(['Update-Admin']);

  }
}
