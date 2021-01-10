import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 
  constructor(private router:Router) 
  {
  }
  flag=false;
  public somefn()
  {
    this.flag=!this.flag;
  }
  public reg(value)
  {
    if(value)
    {
      this.router.navigate([value]);
    }
  }

  ngOnInit(): void {
  }

}
