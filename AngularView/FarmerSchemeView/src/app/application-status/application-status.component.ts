import { Component, OnInit } from '@angular/core';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';
import { IPolicyDetail } from './../models/IPolicyDetail';
import { IinsuranceClaim } from './../models/IinsuranceClaim';



@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {


  pd:IPolicyDetail={PolicyNo:null,SumInsured:null,SumInsured_per_hectare:null,Premium:null,
  SharePremium:null,Area:null}
  Ins:IinsuranceClaim={ApplicationStatus:'',ApplicationId:null,AppliedDate:null,
  ReasonForClaim:'',Comment:''}
  constructor(private service:SQLServerService,private router:Router) { }

  GoHome()
  {
    this.router.navigateByUrl("/Home")
  }
  GetStatus()
  {
    if(this.Ins.ApplicationId!=null && this.Ins.ApplicationId>0)
    {
      this.service.GetInsClaim(this.Ins.ApplicationId)
      .subscribe(data=>{this.Ins=data},
        error=>{
          console.log(error.ok);
          if(!error.ok)
          {
            alert("Apply for Insurance Claim To track the application or check the associated application number in your profile tab")
            this.GoHome();
          }
        })
    }
  }
  ngOnInit(): void {
  }

}
