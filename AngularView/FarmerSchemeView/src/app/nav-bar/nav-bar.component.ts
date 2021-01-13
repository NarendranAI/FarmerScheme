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

  ToTrade()
  {
    if(this.checkLogin)
    {
      
      if(this.checkType==="F")
      {
        this.router.navigateByUrl("/FarmerHome")
      }
      else if(this.checkType==="T")
      {
        this.router.navigateByUrl("/TraderHome")
      }
      else if(this.checkType==="A")
      {
        alert("Admin Users Cannot Trade")
        this.router.navigateByUrl("/Market")
      }

    }
    else
    {
      alert("Do Login with a Farmer or Trader Account to Trade")
    }
  }
  GoLogin()
  {
  this.router.navigateByUrl("/Login")
  }
  GoAdmin()
  {
    this.router.navigateByUrl("/Admin")
  }

  CheckAdmin():boolean
  {
    return this.checkLogin && this.checkType==="A";
  }
  checkLogin:boolean;
  checkType:string;
  ngOnInit(): void {
    let x=JSON.parse(localStorage.getItem('User'));
    if(x!= null)
    {
      this.checkLogin=true;
      this.checkType=x[0].TypeCode;
    }
    else
    {
      this.checkLogin=false;
    }
  }

}
