import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  flag=false;
  public somefn()
  {
    this.flag=!this.flag;
  }

  ngOnInit(): void {
  }

}
