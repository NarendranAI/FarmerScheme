import { Component, OnInit } from '@angular/core';
import { IUserTables } from './../models/IUserTable';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {

  pswd:boolean=true;
  check_pswd(x,y)
  {
    this.pswd= x.value==y.value;
  }

  UT:IUserTables={UserID:null,UserName:'',Email:'',MobileNumber:null,Password:'',TypeCode:'T',
                  Address:'',City:'',Pincode:null,BankAccountNumber:null,AadharNumber:null,
                LandAddress:'',LandCity:'',LandPinCode:null}

  
  


  constructor(private service:SQLServerService,private router:Router) { }

  public GoHome()
  {
    this.router.navigateByUrl("/Home");
  }

  public Log(x)
  {console.log(x); }

  PostFarmerReg(x)
  {
    this.UT=x;
    this.service.postUserTable(this.UT);
    this.GoHome();
  }


  ngOnInit(): void {
    let x = this.service.getAllUserTable().subscribe(
      data=>{
        this.UT.UserID=data.length+1; console.log(data.length+1);
      }
    );  

  }

}
