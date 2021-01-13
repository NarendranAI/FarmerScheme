import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLServerService } from './../services/SQLServer.service';
import { Ihistory } from './../models/Ihistory';
import { IinsuranceClaim } from './../models/IinsuranceClaim';
import { Iexchange } from './../models/Iexchange';
import { IStock } from './../models/IStock';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {

  constructor(private router:Router,private service:SQLServerService) { }
  stock:IStock={StockId:null,UserID:null,cropId:null,Fertilizer:'',soilPH:null,Quantity:null,Selling_Price:null}

  hist:Ihistory={transid:null,date:null,time:null,UserID:null,
    StockId:null,quantity:null,price:null,status:'',comment:''}

  ex:Iexchange={StockId:null,UserId:null,bid:null}

  claim:IinsuranceClaim={ApplicationId:null,AppliedDate:null,ApplicationStatus:'',ReasonForClaim:'',Comment:''}

  claims=[];
  histories=[];
  a:boolean=true;
  b:boolean=false;
  ClickApplication(){
    this.a=false;this.b=true;
  }
  ClickMarket(){
    this.b=false;this.a=true;
  }
  
  approveStock(x,i){
 
    this.hist.status='Approved'
    this.hist.transid=x.transid;
    if(x.comment==="sell")
    {
      
 
 this.service.putHistoryStatus(this.hist).subscribe(
  data=>{
    this.service.getAllHistory().subscribe(
      data=>{this.histories=data
      console.log(this.histories[0])
      },
      resp=>{
        console.log(JSON.stringify(resp))
      })
  },
  resp=>{console.log(JSON.stringify(resp))}
  
)
    }
    if(x.comment==="Buy")
    {
      this.service.GetExchangeById(x.transid).subscribe(
        data=>
        {
          this.ex=data;
          this.stock.StockId=this.ex.StockId;
          this.stock.Quantity=x.quantity;

          this.service.PutStockQuantity(this.stock).subscribe(
            data=>{
              this.service.putHistoryStatus(this.hist).subscribe(
                data=>{
                  this.service.getAllHistory().subscribe(
                    data=>{this.histories=data
                    console.log(this.histories[0])
                    },
                    resp=>{
                      console.log(JSON.stringify(resp))
                    })
                },
                resp=>{console.log(JSON.stringify(resp))}
                
              )
            },
            resp=>{
              console.log(resp);
            }
          )
        },
        resp=>{
          console.log(JSON.stringify(resp))
        }
      )

    }
  }

  approveClaim(x){
    this.claim.ApplicationId=x.ApplicationId;
    this.claim.ApplicationStatus="Approved";
    this.service.putInsStatus(this.claim).subscribe(
      data=>{
        this.service.getAllInsClaims().subscribe(data=>{
          this.claims=data;
          console.log(this.claims[0])
        },resp=>{
          console.log(resp)
        }
          ) 
      },
      resp=>{
        console.log(JSON.stringify(resp))
      }
    )
  }


  GoHome(){this.router.navigateByUrl("/Home")}
  GoSell(){this.router.navigateByUrl("/Sell")}
  GoReport(){this.router.navigateByUrl("/Report")}
  GoMarket(){this.router.navigateByUrl("/Market")}
  GoBuy(){this.router.navigateByUrl("/Buy")}

  ngOnInit(): void {

    let x=JSON.parse(localStorage.getItem('User'))
    if(x==null)
    {
      alert("Login First as Admin")
      this.GoHome();
    }
    else
    {
      if(x[0].TypeCode==="A")
      {
        this.service.getAllHistory().subscribe(
          data=>{this.histories=data
          console.log(this.histories[0])
          },
          resp=>{
            console.log(JSON.stringify(resp))
          })
          this.service.getAllInsClaims().subscribe(data=>{
            this.claims=data;
            console.log(this.claims[0])
          },resp=>{
            console.log(resp)
          }
            ) 


      }
      else
      {
        alert("This is an Admin Privilege page")
        this.GoHome();
      }
    }
  }

}
