import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css']
})
export class CalculatePremiumComponent implements OnInit {

  flag:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  submit()
  {
  
  }
  calculate()
  {
    this.flag=!this.flag;
  
  }
}
