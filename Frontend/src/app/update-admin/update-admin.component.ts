import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Admins } from '../admins';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  a: Admins = new Admins();
  constructor(private adminservice: AdminserviceService ,private router: Router) { }

  ngOnInit(): void {
    this.getAdminById()
  }

  UpdateAdmin(id?: Number)
  {
    console.log(this.a);
    this.adminservice.updateAdminById(this.a).subscribe();
    this.router.navigate(['Admin']) 
    
    
}
getAdminById()
{
  this.adminservice.getAdminById().subscribe(data =>
    {
      this.a=data;
});
}

}
