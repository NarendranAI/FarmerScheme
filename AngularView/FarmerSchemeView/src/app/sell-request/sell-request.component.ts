import { Component, OnInit } from '@angular/core';
//import { Console } from 'console';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit{
  croptype:string;
  cropname:string;
  fertilizertype:string;
  quantity:number;
  constructor() { }
  submitted:boolean=false;
  onSubmit()
  {
    //const allInfo='Crop type is ${this.croptype}. Crop name is ${this.cropname}. fertilizer type is ${this.fertilizertype}. quantity is ${this.quantity}';
    alert("Request placed Succesfully");
  }
  ngOnInit(): void {
  }

}
