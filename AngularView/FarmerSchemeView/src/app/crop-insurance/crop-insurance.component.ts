import { Component, OnInit } from '@angular/core';
import { SQLServerService } from '../services/SQLServer.service';
@Component({
  selector: 'crop-insurance',
  templateUrl: './crop-insurance.component.html',
  styleUrls: ['./crop-insurance.component.css']
})
export class CropInsuranceComponent implements OnInit {
  CropTypeList:any[];
  constructor(private service:SQLServerService) { }

  
  ngOnInit(): void 
  {
    this.service.getCropInsurance().subscribe(data=>
    {
      
      this.CropTypeList=data;
      console.log(this.CropTypeList[0]['croptype']);
    });
    
  }

}
