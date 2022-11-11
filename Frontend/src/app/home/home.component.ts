import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  image : string = "assets/images/charles-forerunner-gapYVvUg1M8-unsplash.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
