import { Component, OnInit } from '@angular/core';
import {Router,RouterModule} from '@angular/router';
import { FarmerRegistrationComponent} from './../farmer-registration/farmer-registration.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 currentRoute:string;
  constructor(private router:Router) { }
  flag=false;
  public somefn()
  {
    this.flag=!this.flag;
  }
   public reg(value)
   {
     if(value)
     {
     this.router.navigate([value]);
     }
   }
  submit()
  {
    this.router.navigate(['\Login']);
  }

  ngOnInit(): void {
  }

}
