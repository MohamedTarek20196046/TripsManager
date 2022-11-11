import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admins } from '../admins';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private adminservice: AdminserviceService ,private router: Router) { }
  admins ?: Admins[];
  a: Admins = new Admins();
  ngOnInit(): void {
    this.getAllAdmins();
  }
  
  SignIn()
  {
    console.log(this.a);
    this.adminservice.SignIn(this.a).subscribe();
    if(this.Check(this.a.username,this.a.password))
    {
      this.adminservice.unlock();
    }
    this.router.navigate(['home'])
    
  }
  getAllAdmins()
  {
    this.adminservice.getAllAdmins().subscribe(data=>{
      this.admins = data;
      console.log(this.admins[0].username)
    })
  }
  Check(s1 ?:String ,s2 ?:String  ) : boolean
  {
    let x=0;
    this.admins?.forEach(function(value){
      
      if(value.username===s1 && value.password===s2)
      {
          x=1;
      }
    });

    if(x===1)
    {
      console.log("logged success")
      this.adminservice.SetTemp(1)
      return true;
    }
    else{
      console.log("logged failed")
      return false;
    }
       
    
  }
}