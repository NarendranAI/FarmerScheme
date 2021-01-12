import { Component, OnInit } from '@angular/core';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';
import { IinsuranceClaim } from './../models/IinsuranceClaim';
import { IPolicyApplicants } from './../models/IPolicyApplicant';
import { IPolicyDetail } from './../models/IPolicyDetail';
import { IUser } from './../models/IUser';
import { promise } from 'protractor';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-insurance-claim',
  templateUrl: './insurance-claim.component.html',
  styleUrls: ['./insurance-claim.component.css']
})
export class InsuranceClaimComponent implements OnInit {

  x:IUser;
  claim:IinsuranceClaim={ApplicationId:null,AppliedDate:null,ApplicationStatus:'',ReasonForClaim:'',Comment:''}
  insComp:string;
  pa:IPolicyApplicants={ApplicationId:null,PolicyNo:null,UserID:null};
  pd:IPolicyDetail={PolicyNo:null,SumInsured:null,SumInsured_per_hectare:null,
  Premium:null,SharePremium:null,Area:null}
  constructor(private service:SQLServerService,private router:Router) {
    this.insComp="Team 16 Finance Ltd";
    
   }


   log(f)
   {
     console.log(f);
   }

   Changed()
   {
     if(this.pa.ApplicationId!=null && this.pa.ApplicationId>0)
     {
      this.service.getPolicyApplicantById(this.pa.ApplicationId).subscribe(data=>{this.pa=data})
     }
   }
   
   Change1()
   {
     this.service.getPolicyDetailByID(this.pa.PolicyNo).subscribe(data=>{this.pd=data;
    console.log(data)})
   }
  InsClaim()
  {
    this.claim.ApplicationStatus="Applied. UnderVerification"
    this.claim.ApplicationId=this.pa.ApplicationId;
    console.log(this.claim)
    this.service.PostInsClaim(this.claim).subscribe(
      ()=>{
        alert("Success")
        this.GoHome()
      },error=>{
        alert("Failed because:"+error.statusText)
        console.log(JSON.stringify(error ))
      }
    )
  }
  GoHome()
  {this.router.navigateByUrl("/Home")}
  
  ngOnInit(): void {
    this.x=JSON.parse(localStorage.getItem('User'));
  }

}
