import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor() { }
  constructor(private router:Router){}
 Farmer():void{
   this.router.navigateByUrl('FarmerRegistration');
 }
 Bidder():void{
   this.router.navigateByUrl('TraderRegistration');
 }
  onSubmit()
  {
    alert("Login Succesfully!!!!");
  }
  ngOnInit(): void {
  }

}
