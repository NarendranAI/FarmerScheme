import { Component, OnInit } from '@angular/core';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';
import { Icrop } from './../models/Icrop';
import { Icrop_insurance } from './../models/Icrop_insurance';




@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css']
})
export class CalculatePremiumComponent implements OnInit {

  crop:Icrop={cropid:null,cropname:'',croptype:''}
  crop_ins:Icrop_insurance={croptype:'',premium_percentage:null,insurance_validity:null}
  
  constructor(private service:SQLServerService,private router:Router) { }
  GoHome()
  {
    this.router.navigateByUrl("/Home")
  }

  


  ngOnInit(): void {
  }

}
