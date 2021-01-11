import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SQLServerService } from './../services/SQLServer.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 
  
  constructor(private router:Router,private service:SQLServerService) 
  {
  }
  GoHome()
  {
    this.router.navigateByUrl("/Home");
  }
  GoProfile()
  {
    this.router.navigateByUrl("/UserProfile");
  }
 
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

  Logout()
  {
    this.service.Logout();
    location.reload();
  }

  GoLogin()
  {this.router.navigateByUrl("/Login")}
  checkLogin:boolean;
  ngOnInit(): void {
    let x=JSON.parse(localStorage.getItem('User'));
    if(x!= null)
    {
      this.checkLogin=true;
    }
    else
    {
      this.checkLogin=false;
    }
  }

}
