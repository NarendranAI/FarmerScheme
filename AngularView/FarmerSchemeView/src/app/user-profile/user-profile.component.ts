import { Component, OnInit } from '@angular/core';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';
import { IUser } from './../models/IUser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public x:IUser;
  constructor(private service:SQLServerService,private router:Router) { 
    this.x=JSON.parse( localStorage.getItem('User'))
  }
  GoHome()
  {this.router.navigateByUrl("/Home")}
  Logout()
  {
    this.service.Logout();
    this.GoHome();
  }
  

  ngOnInit(): void {
   
  }

}
