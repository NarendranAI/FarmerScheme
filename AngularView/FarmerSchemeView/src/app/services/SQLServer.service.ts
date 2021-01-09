import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';

@Injectable
(
    {
        providedIn: 'root',
    }
)
export class SQLServerService
{
    root_url='http://localhost:38709/api/';
    
    crop_controller_urls=['crop_insurance/','crops/'];
    insurance_controller_urls=['InsuranceAvails/','InsuranceClaims/','PolicyApplicants/','Policydetails/'];
    stocks_controller_urls=['exchanges/','histories/','stocks/'];
    users_controller_urls=['UserBankDetails/','UserDocuments/','UserTables/','UserTypes/'];

    httpOptions={
        headers:new HttpHeaders ({'Content-Type':'application/json'})
    };

    constructor(private http:HttpClient){}
    getCropInsurance():Observable<any[]>
    {
        console.log(this.root_url+this.crop_controller_urls[0]+'GetCrop_Insurance');
        return this.http.get<any[]>(this.root_url+this.crop_controller_urls[0]+'GetCrop_Insurance',this.httpOptions);
    }
}