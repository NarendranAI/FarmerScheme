import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLServerService } from './../services/SQLServer.service';
import { IStock } from './../models/IStock';
import { Icrop } from './../models/Icrop';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  constructor(private router:Router,private service:SQLServerService) { 
    this.CartQuantity=0;
    this.CartValue=0;
  }
  stocks:IStock[];
  crops:Icrop[];
  CartQuantity:number;
  CartValue:number;

  GoHome(){this.router.navigateByUrl("/Home")}
  GoSell(){this.router.navigateByUrl("/Sell")}
  GoReport(){this.router.navigateByUrl("/Report")}
  GoMarket(){this.router.navigateByUrl("/Market")}
  GoBuy(){this.router.navigateByUrl("/Buy")}
  CanBuy:boolean;
  UserName:string;

  ngOnInit(): void {
    let x=JSON.parse(localStorage.getItem('User'))
    if(x==null)
    {
      alert("Login First to Trade")
      this.GoHome();
    }
    else
    {
      this.UserName=x[0].UserName;
      this.service.GetAllStock().subscribe(
        (data)=>{
          if(data.length>0)
          {
          this.stocks=data;
          console.log(this.stocks)
          console.log((this.stocks[0] as any).crop.cropname)
          }
          
        },
        (resp)=>{}
      )
      if(x[0].TypeCode==="F")
      {
        this.CanBuy=false;
      }
      else if(x[0].TypeCode==="T")
      {
        this.CanBuy=false;
      }
      else if(x[0].TypeCode==="A")
      {
        this.CanBuy=false; 
      }
    }

  }

}
