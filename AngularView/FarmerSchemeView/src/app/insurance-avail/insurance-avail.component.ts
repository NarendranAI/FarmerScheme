import { Component, OnInit } from '@angular/core';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';
import { Icrop_insurance } from './../models/Icrop_insurance';
import { Icrop } from '../models/Icrop';
import { IPolicyDetail } from './../models/IPolicyDetail';
import { IUserTables } from './../models/IUserTable';
import { IPolicyApplicants } from './../models/IPolicyApplicant';

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
  {}
  Calculate(val)
  {
    
    this.p.Area=val.Area;
   this.p.SumInsured=val.SumInsured;
   this.p.Premium=this.premium*0.01*this.p.SumInsured;
   this.p.SharePremium=(this.comp_premium-this.premium)*0.01*this.p.SumInsured;
   this.p.SumInsured_per_hectare=this.p.SumInsured/this.p.Area;
   console.log(this.p)

  }
  getCropByType(value)
  { 
    let c=this.service.getCropByType(value);
    c.subscribe(data=>{
      this.premium=data[0].premium_percentage;

      for (let i=0;i<(data as any[]).length;i++)
      {
        //console.log(data[i])
        this.crops[i]=data[i].cropname
      }
      //console.log(this.crops);
    })
    
    //console.log(this.crops);
  }



  ngOnInit(): void {
    let x=JSON.parse(localStorage.getItem('User'))
    this.service.getUserTable(x[0].UserID).subscribe(data=>
      {this.UT=data; console.log(this.UT)}
    )
  }

}
