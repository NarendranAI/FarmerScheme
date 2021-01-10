import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IUserTables } from './../models/IUserTable';
import { SQLServerService } from './../services/SQLServer.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';



@Component({
  selector: 'app-trader-registration',
  templateUrl: './trader-registration.component.html',
  styleUrls: ['./trader-registration.component.css']
})



export class TraderRegistrationComponent implements OnInit {
  pswd:boolean=true;
  check_pswd(x,y)
  {
    this.pswd= x.value==y.value;
  }

  UT:IUserTables={UserID:null,UserName:'',Email:'',MobileNumber:null,Password:'',TypeCode:'T',
                  Address:'',City:'',Pincode:null,BankAccountNumber:null,AadharNumber:null,
                LandAddress:'',LandCity:'',LandPinCode:null}

  
  


  constructor(private service:SQLServerService,private router:Router) { }
  public Log(x)
  {console.log(x); }

  PostTraderReg(x:IUserTables)
  {
    // this.UT.AadharNumber=x.value.AadharNumber as number ;
    // this.UT.Address=x.value.Address as string;
    // this.UT.BankAccountNumber=x.value.BankAccountNumber as number;
    // this.UT.City=x.value.City as string;
    // this.UT.Email=x.value.Email as string;
    // this.UT.LandAddress='';
    // this.UT.LandCity='';
    // this.UT.LandPinCode=null;
    // this.UT.MobileNumber=x.value.MobileNumber as number;
    // this.UT.Password=x.value.Password as string;
    // this.UT.Pincode=x.value.Pincode as number;
    // this.UT.TypeCode='T';
    // this.UT.UserName=x.value.UserName as string;
    // console.log(this.UT);
    // this.service.postUserTable(this.UT);
    //this.router.navigateByUrl("Home");

// x.value.Aadhaar
// x.value.IFSC_Code
// x.value.PAN
// x.value.PanNo
// x.value.RetypePassword
// x.value.State
// x.value.TraderLicense
this.UT=x;
this.service.postUserTable(this.UT);
  
  }

  ngOnInit(): void {
  let x = this.service.getUserTableCount();
  if(typeof x ==='undefined')
  {
    this.UT.UserID=1;
  }
  else{
    this.UT.UserID=x+1;
  }

    }

}
