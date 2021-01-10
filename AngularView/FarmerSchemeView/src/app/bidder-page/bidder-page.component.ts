import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidder-page',
  templateUrl: './bidder-page.component.html',
  styleUrls: ['./bidder-page.component.css']
})
export class BidderPageComponent implements OnInit {

  constructor() { }
  submitted:false;
  ngOnInit(): void {
  }

}
