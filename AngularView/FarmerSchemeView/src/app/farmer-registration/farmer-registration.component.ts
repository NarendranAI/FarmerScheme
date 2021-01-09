import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {
 data :{UserId:number;
UserName:string;
Email:string;
MobileNumber:string}
  constructor() { }
 submit(data)
 {
   this.data=data;
   console.log(data);
 }
  ngOnInit(): void {
  }

}
