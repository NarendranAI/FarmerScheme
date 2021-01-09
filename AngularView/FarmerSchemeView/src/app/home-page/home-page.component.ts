import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  flag=false;
  public somefn()
  {
    this.flag=!this.flag;
  }
  image1=false;
  public image1toggle()
  {
    this.image1=!this.image1;
  }
  image2=false;
  public image2toggle()
  {
    this.image2=!this.image2;
  }
  image3=false;
  public image3toggle()
  {
    this.image3=!this.image3;
  }
  image4=false;
  public image4toggle()
  {
    this.image4=!this.image4;
  }

  ngOnInit(): void {
  }

}
