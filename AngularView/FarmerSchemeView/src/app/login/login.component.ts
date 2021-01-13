import { Component, OnInit } from '@angular/core';
import { IUserTables } from './../models/IUserTable';
import { Router } from '@angular/router';
import { SQLServerService } from './../services/SQLServer.service';
import { IUser } from '../models/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  UT:IUserTables={UserID:null,UserName:'',Email:'',MobileNumber:null,Password:'',TypeCode:'T',
                  Address:'',City:'',Pincode:null,BankAccountNumber:null,AadharNumber:null,
                LandAddress:'',LandCity:'',LandPinCode:null}

  LoginResp:IUser;
  

  GoHome()
  {
    this.router.navigateByUrl("/Home");
  }
  GoFReg()
  {
    this.router.navigateByUrl("/FarmerRegistration");
  }
  GoTReg()
  {
    this.router.navigateByUrl("/TraderRegistration");
  }
  Login(x)
  {
    let login=this.service.Login(this.UT);
    
    login.subscribe(data=>{this.LoginResp=data; console.log(this.LoginResp);
      if((this.LoginResp as any).length==1)
    {
      this.service.SetUser(this.LoginResp);
      this.router.navigateByUrl("/Home");
    }
    else
    {
      alert("Enter the correct UserName and Password")
    }
  },
  resp=>console.log(resp)
  )
    
  }
  log(x)
  {
    console.log(x);
  }

  constructor(private service:SQLServerService,private router:Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("User"))
    let x=JSON.parse(localStorage.getItem('User'));
   

    if(x != null)
    {
      alert("You Are Already Logged in"+" Username:"+x[0].UserName)
      this.GoHome();
    }
  }

}
