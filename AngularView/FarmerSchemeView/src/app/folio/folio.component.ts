import { Component, OnInit } from '@angular/core';
import { portfolio } from './../models/portfolio';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-folio',
  templateUrl: './folio.component.html',
  styleUrls: ['./folio.component.css']
})
export class FolioComponent implements OnInit {

  p:portfolio={UserID:null,cropid:null,cropname:'',croptype:'',
  ApplicationId:null,PolicyNo:null,Premium:null,SharePremium:null,SumInsured:null,
  SumInsured_per_hectare:null,Area:null}
  constructor(private service:SQLServerService,private router:Router) { }

  ngOnInit(): void {
    let x=JSON.parse(localStorage.getItem('User'))
    if(x==null)
    {
      alert("Login for accessing folio")
      this.router.navigateByUrl("/Home")
    }
    else
    {
      if(x[0].TypeCode!="F")
      {
        alert("Login using a Farmer Account/ Register for one")
        this.router.navigateByUrl("/Home")
      }
      
     
    }
  }

}
