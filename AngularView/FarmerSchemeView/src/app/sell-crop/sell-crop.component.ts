import { Component, OnInit } from '@angular/core';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';
import { IStock } from './../models/IStock';
import { Icrop } from './../models/Icrop';
import { Ihistory } from './../models/Ihistory';


@Component({
  selector: 'app-sell-crop',
  templateUrl: './sell-crop.component.html',
  styleUrls: ['./sell-crop.component.css']
})
export class SellCropComponent implements OnInit {

  constructor(private router:Router,private service:SQLServerService) { }
  
  stock:IStock={StockId:null,UserID:null,cropId:null,Fertilizer:'',soilPH:null,Quantity:null,Selling_Price:null}
  
  c:Icrop={cropid:null,croptype:'',cropname:''}
  
  crops=[];
  
  PH:string;

  hist:Ihistory={transid:null,date:null,time:null,UserID:null,
    StockId:null,quantity:null,price:null,status:'',comment:''}
  

  getCropByType(value)
  { 
    let c=this.service.getCropByType(value);
    c.subscribe(data=>{

      for (let i=0;i<(data as any[]).length;i++)
      {
        this.crops[i]=data[i].cropname
      }
    })
  }
  getCropByName(value)
  {
    let x=this.service.getCropByName(value)
    x.subscribe(data=>{this.stock.cropId=(data[0] as Icrop).cropid
    console.log(this.stock.cropId)},
    resp=>{
      console.log(resp)
    }
    
    );
  }



  GoHome(){this.router.navigateByUrl("/Home")}
  GoSell(){this.router.navigateByUrl("/Sell")}
  GoReport(){this.router.navigateByUrl("/Report")}
  GoMarket(){this.router.navigateByUrl("/Market")}
  GoBuy(){this.router.navigateByUrl("/Buy")}

  SellCrop()
  {
    this.stock.Fertilizer=this.stock.Fertilizer+", "+this.PH

    this.hist.price=this.stock.Selling_Price;
    this.hist.quantity=this.stock.Quantity;
    console.log(this.hist)
    console.log(this.stock)
    
    
    this.service.PostStock(this.stock).subscribe(
    ()=>{
      alert("Stock Sold Succcessfully")
      this.service.PostHistory(this.hist).subscribe(
        ()=>{},resp=>{
          console.log(JSON.stringify(resp))
        }
      )
        this.GoMarket();
    },
    resp=>{
      console.log(JSON.stringify(resp))

      if(!resp.ok)
      {
        alert("Failed: (Status:"+resp.statusText+")")
      }
    }
    )
  }

  ngOnInit(): void {
    let x=JSON.parse(localStorage.getItem('User'))
    
    if(x==null)
    {
      alert("Login First to Trade")
      this.GoHome();
    }
    else
    {
      if(x[0].TypeCode==="F")
      {

        let x=JSON.parse(localStorage.getItem('User'))
        this.hist.UserID=x[0].UserID;
        this.stock.UserID=x[0].UserID;
        this.service.GetAllStock().subscribe(data=>{this.stock.StockId= data.length+1;
        this.hist.StockId=data.length+1;
        console.log("service")
        })
        this.hist.comment='sell';
        this.hist.date=new Date()
        console.log(this.hist.date)
        this.hist.status='Awaiting Approval'
        this.service.getAllHistory().subscribe(
          data=>{
            this.hist.transid=data.length+1;
          },
          resp=>{}
        )
      }
      else
      {
        alert("Login As Farmer For this Action")
        this.GoHome();
      }
    }
}
      }