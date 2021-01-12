import { Component, OnInit } from '@angular/core';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';
import { Icrop_insurance } from './../models/Icrop_insurance';
import { Icrop } from '../models/Icrop';
import { IPolicyDetail } from './../models/IPolicyDetail';
import { IUserTables } from './../models/IUserTable';
import { IPolicyApplicants } from './../models/IPolicyApplicant';
import { IinsuranceAvail } from './../models/IinsuranceAvail';


@Component({
  selector: 'app-insurance-avail',
  templateUrl: './insurance-avail.component.html',
  styleUrls: ['./insurance-avail.component.css']
})
export class InsuranceAvailComponent implements OnInit {

  ci:Icrop_insurance={croptype:'',premium_percentage:null,insurance_validity:null}

  c:Icrop={cropid:null,croptype:'',cropname:''}
  
  p:IPolicyDetail={PolicyNo:null,SumInsured:null,SumInsured_per_hectare:null,
    Premium:null,SharePremium:null,Area:null}

    pa:IPolicyApplicants={ApplicationId:null,PolicyNo:null,UserID:null}
  
    UT:IUserTables={UserID:null,UserName:'',Email:'',MobileNumber:null,Password:'',TypeCode:'',
    Address:'',City:'',Pincode:null,BankAccountNumber:null,AadharNumber:null,
    LandAddress:'',LandCity:'',LandPinCode:null}

    ii:IinsuranceAvail={ApplicationId:null,cropid:null,UserID:null}

    

  crops=[]; area:number;
  premium:number; shrprem:number;
  sum:number; one_crop:string;
  sumper:number;

  comp_premium:number;



  log(x)
  {
    console.log(x)
  }
  constructor(private service:SQLServerService,private router:Router) { this.comp_premium=8;}
  
  cropInsAvail()
  {
    this.service.postPolicyDetails(this.p).subscribe(data=>console.log(data));
    this.service.postPolicyApplicant(this.pa).subscribe(data=>console.log(data));
    console.log(this.ii)
    this.service.postInsAvail(this.ii);
    this.GoHome();
  }

  Calculate(val)
  {
   this.one_crop=val.cropname;
   this.p.Area=val.Area;
   this.p.SumInsured=val.SumInsured;
   this.p.Premium=this.premium*0.01*this.p.SumInsured;
   this.p.SharePremium=(this.comp_premium-this.premium)*0.01*this.p.SumInsured;
   this.p.SumInsured_per_hectare=this.p.SumInsured/this.p.Area;
   this.pa.UserID=this.UT.UserID;
   let x=this.service.getCropByName(this.one_crop)
    x.subscribe(data=>{
      this.ii.cropid=data[0].cropid;
      this.ii.UserID=this.UT.UserID;
      this.ii.ApplicationId=this.pa.ApplicationId;
    });

  }
  getCropByType(value)
  { 
    let c=this.service.getCropByType(value);
    c.subscribe(data=>{
      this.premium=data[0].premium_percentage;

      for (let i=0;i<(data as any[]).length;i++)
      {
        this.crops[i]=data[i].cropname
      }
    })
    
    
  }

  GoHome()
  {
    this.router.navigateByUrl("/Home");
  }

  ngOnInit(): void {
    let x=JSON.parse(localStorage.getItem('User'))
    this.service.getUserTable(x[0].UserID).subscribe(data=>
      {this.UT=data; }
    )
    this.service.getPolicyDetails().subscribe(data=>{this.p.PolicyNo=(data as any[]).length+1
    this.pa.PolicyNo=(data as any[]).length+1});
    this.service.getPolicyApplicant().subscribe(data=>{this.pa.ApplicationId=(data as any[]).length+1;
    })
    
    
  }

}
