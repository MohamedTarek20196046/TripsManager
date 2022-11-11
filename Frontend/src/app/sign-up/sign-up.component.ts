import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admins } from '../admins';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private adminservice: AdminserviceService ,private router: Router) { }
  admins ?: Admins[];
  a: Admins = new Admins();
  ngOnInit(): void {
  }
  
  SignUp()
  {
    console.log(this.a);
    this.adminservice.SignUp(this.a).subscribe();
    this.router.navigate(['home'])
  }
}
