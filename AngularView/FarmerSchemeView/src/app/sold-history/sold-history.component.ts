import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sold-history',
  templateUrl: './sold-history.component.html',
  styleUrls: ['./sold-history.component.css']
})
export class SoldHistoryComponent implements OnInit {

  constructor() { }
  submitted:boolean=false;
  ngOnInit(): void {
  }

}
