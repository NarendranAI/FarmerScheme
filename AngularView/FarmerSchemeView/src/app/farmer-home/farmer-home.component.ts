import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLServerService } from './../services/SQLServer.service';

@Component({
  selector: 'app-farmer-home',
  templateUrl: './farmer-home.component.html',
  styleUrls: ['./farmer-home.component.css']
})
export class FarmerHomeComponent implements OnInit {

  constructor(private router:Router,private service:SQLServerService) { }

  GoHome(){this.router.navigateByUrl("/Home")}
  GoSell(){this.router.navigateByUrl("/Sell")}
  GoReport(){this.router.navigateByUrl("/Report")}
  GoMarket(){this.router.navigateByUrl("/Market")}
  GoBuy(){this.router.navigateByUrl("/Buy")}


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
      {}
      else
      {
        alert("Login As Farmer For this portal")
        this.GoHome();
      }
    }
  }

}
