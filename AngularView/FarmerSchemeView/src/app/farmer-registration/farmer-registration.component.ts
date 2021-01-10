import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {
 data :{
UserName:string;
Email:string;
MobileNumber:string
Address:string
City:string
Pincode:string
BankAccountNumber:string
}
  constructor(private router:Router) { }
  submit()
  {
    this.router.navigate(['/Login']);
  }
  pswd:boolean=true;
  check_pswd(x,y)
  {
    this.pswd= x.value==y.value;
  }

  UT={UserID:null,UserName:'',Email:'',MobileNumber:null,Password:'',TypeCode:'T',
                  Address:'',City:'',Pincode:null,BankAccountNumber:null,AadharNumber:null,
                LandAddress:'',LandCity:'',LandPinCode:null}

                public Log(x)
                {console.log(x); }
              
                PostTraderReg(x)
                {
                }

  ngOnInit(): void {
  }

}
