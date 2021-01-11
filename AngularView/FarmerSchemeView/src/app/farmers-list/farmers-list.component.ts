import { Component, OnInit } from '@angular/core';
import { SQLServerService } from './../services/SQLServer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'farmers-list',
  templateUrl: './farmers-list.component.html',
  styleUrls: ['./farmers-list.component.css']
})
export class FarmersListComponent implements OnInit {

  constructor(private router:Router,private service:SQLServerService) { }
  farmersList:any[];
  ngOnInit(): void {
    
  }

}
