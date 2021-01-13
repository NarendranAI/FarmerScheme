import { Component, OnInit } from '@angular/core';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';
import { IStock } from './../models/IStock';
import { Ihistory } from './../models/Ihistory';
import { Iexchange } from './../models/Iexchange';


@Component({
  selector: 'app-buy-crop',
  templateUrl: './buy-crop.component.html',
  styleUrls: ['./buy-crop.component.css']
})
export class BuyCropComponent implements OnInit {

  stock:IStock={StockId:null,UserID:null,cropId:null,Fertilizer:'',soilPH:null,Quantity:null,Selling_Price:null}
  
  ex:Iexchange={StockId:null,UserId:null,bid:null}

  hist:Ihistory={transid:null,date:new Date(),time:null,UserID:null,
    StockId:null,quantity:null,price:null,status:'Awaiting Approval',comment:'Buy'}
  
    constructor(private service:SQLServerService,private router:Router) { }
    invalid=true;
  Change()
  {
    this.service.GetStockById(this.stock.StockId).subscribe(
      data=>{
        console.log((data as any).histories[0].comment)
        if((data as any).histories[0].comment!="Buy")
        {
          this.stock.cropId=data.cropId;
          this.stock.Fertilizer=data.Fertilizer;
          this.stock.Quantity=data.Quantity;
          this.stock.Selling_Price=data.Selling_Price;
          console.log("Id:"+this.stock.UserID)
          this.quantity=this.stock.Quantity;
          this.bid=this.stock.Selling_Price;
          this.cropname=(data as any).crop.cropname
          this.croptype=(data as any).crop.croptype
          this.invalid=false;
        }
        else
        {
          alert("Enter a Valid Stock number. View in market")
        }
        
      },
      resp=>{
        console.log(JSON.stringify(resp))
        alert("Enter a valid stock number. Check Market View to get number")
      }
    )
  }

  Submit()
  {
    this.ex.StockId=this.stock.StockId;
    this.ex.UserId=this.UID;
    this.stock.StockId=this.SID;
    this.stock.UserID=this.UID;
    this.hist.UserID=this.UID;
    this.hist.StockId=this.SID;
    this.hist.price=this.stock.Selling_Price;
    this.hist.quantity=this.stock.Quantity;
    this.hist.price=this.stock.Selling_Price;
    console.log(this.stock)
    console.log(this.ex)
    console.log(this.hist)
    if(this.quantity<this.stock.Quantity || this.stock.Quantity<=0)
    {
      alert("Quantity is greater than available or invalid")
    }
    else if(this.stock.Selling_Price<=0)
    {
      alert("Bid price must be greater than 0")
    }
    else
    {
        this.service.PostStock(this.stock).subscribe(
          ()=>{
            this.service.PostHistory(this.hist).subscribe(
              ()=>{
                this.service.PostExchange(this.ex).subscribe(
                  ()=>{
                    alert("Successfully placed bid")
                    this.GoHome()
                  },
                  resp=>{console.log(JSON.stringify(resp))}
                )
              },
              resp=>{
                alert("Error:"+resp.statusText)
              }
            )
          },
          resp=>{
            alert("Error:"+resp.statusText)
          }
        )
    }

  }

  UID:number;
  SID:number;
  quantity:number;
  bid:number;
  cropname:string;
  croptype:string;


  GoHome(){this.router.navigateByUrl("/Home")}
  GoSell(){this.router.navigateByUrl("/Sell")}
  GoReport(){this.router.navigateByUrl("/Report")}
  GoMarket(){this.router.navigateByUrl("/Market")}
  GoBuy(){this.router.navigateByUrl("/Buy")}



  ngOnInit(): void {
    let x=JSON.parse(localStorage.getItem('User'))
    if(x==null)
    {
      alert("Login to Trade")
      this.GoHome();
    }
    else
    {
      if(x[0].TypeCode==="T")
      {
        this.UID=x[0].UserID;
        this.service.GetAllStock().subscribe(
          data=>this.SID=data.length+1,
          resp=>{console.log(JSON.stringify(resp))}
        )
        this.service.getAllHistory().subscribe(
          data=>this.hist.transid=data.length+1
        )

      }
      else
      {
        alert("This action can be done only by Trader")
        this.GoHome();
      }
    }

  }

}
