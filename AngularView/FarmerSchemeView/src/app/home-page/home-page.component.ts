import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }
  
  image1=false;
  public image1toggle()
  {
    this.image1=!this.image1;
  }
  image2=false;
  public image2toggle()
  {
    this.image2=!this.image2;
  }
  image3=false;
  public image3toggle()
  {
    this.image3=!this.image3;
  }
  image4=false;
  public image4toggle()
  {
    this.image4=!this.image4;
  }
  Imageclick()
  {
    this.router.navigate(['/InsuranceClaim']);
  }
  Imageclick1()
  {
    this.router.navigate(['/InsuranceAvail']);
  }
  Imageclick2()
  {
    this.router.navigate(['/ApplicationStatus']);
  }
  Imageclick3()
  {
    this.router.navigate(['/CalculatePremium']);
  }

  ngOnInit(): void {
  }

}
