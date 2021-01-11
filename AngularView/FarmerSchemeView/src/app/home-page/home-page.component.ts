import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  x:any;
  constructor(private router:Router) { }
  UserType:string;
  image1=false;
GoInsuranceAvail()
{
  if(this.x!=null)
  {if(this.x[0].TypeCode==="F")
    {this.router.navigateByUrl("/InsuranceAvail");}
    else
    {alert("Login using Farmer Account/Create one if you dont have");}
  }
  else
  {
    alert("Login to apply")
  }
}

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

  ngOnInit(): void {
    this.x=JSON.parse(localStorage.getItem("User"))
    console.log(this.x[0].TypeCode)
    
  }

}
