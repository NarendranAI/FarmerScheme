import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLServerService } from './../services/SQLServer.service';
@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css']
})
export class TransactionReportComponent implements OnInit {

  constructor(private router:Router,private service:SQLServerService) { }
  
    histories=[];
    GoHome(){this.router.navigateByUrl("/Home")}
  GoSell(){this.router.navigateByUrl("/Sell")}
  GoReport(){this.router.navigateByUrl("/Report")}
  GoMarket(){this.router.navigateByUrl("/Market")}
  GoBuy(){this.router.navigateByUrl("/Buy")}
  UID:number;
  ngOnInit(): void {

    let x=JSON.parse(localStorage.getItem('User'))
    if(x==null)
    {
      alert("Login First to generate report")
      this.GoHome();
    }
    else
    {
      if(x[0].TypeCode!="A")
      {
        this.UID=x[0].UserID;
        this.service.getAllHistory().subscribe(
          data=>{this.histories=data
          console.log(this.histories[0])
          },
          resp=>{
            console.log(JSON.stringify(resp))
          })

      }
      else
      {
        alert("Need Farmer/Trader Account to generate report")
        this.GoHome();
      }
    }
  }

}
