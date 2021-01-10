import { Component, OnInit } from '@angular/core';
import { SQLServerService } from '../services/SQLServer.service';
import { Icrop_insurance } from './../models/Icrop_insurance';
@Component({
  selector: 'crop-insurance',
  templateUrl: './crop-insurance.component.html',
  styleUrls: ['./crop-insurance.component.css']
})
export class CropInsuranceComponent implements OnInit {
  CropTypeList:Icrop_insurance[];
  constructor(private service:SQLServerService) { }

  
  ngOnInit(): void 
  {
    this.service.getAllCropInsurance().subscribe(data=>
    {      
      this.CropTypeList=data;
    });
    
  }

}
