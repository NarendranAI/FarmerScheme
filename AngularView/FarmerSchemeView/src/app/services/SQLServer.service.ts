import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
import { Icrop } from './../models/Icrop';
import { Icrop_insurance } from './../models/Icrop_insurance';
import { IUserTables } from './../models/IUserTable';


@Injectable
(
    {
        providedIn: 'root',
    }
)
export class SQLServerService
{
    root_url='http://localhost/FarmerScheme/api/';
    
    crop_controller_urls=['crop_insurance/','crops/'];
    insurance_controller_urls=['InsuranceAvails/','InsuranceClaims/','PolicyApplicants/','Policydetails/'];
    stocks_controller_urls=['exchanges/','histories/','stocks/'];
    users_controller_urls=['UserBankDetails/','UserDocuments/','UserTables/','UserTypes/'];

    httpOptions={
        headers:new HttpHeaders ({'Content-Type':'application/json'})
    };

    constructor(private http:HttpClient){}
    // crop_insurance CRUD services
    getAllCropInsurance():Observable<Icrop_insurance[]>
    {
        console.log(this.root_url+this.crop_controller_urls[0]+'GetCrop_Insurance');
        return this.http.get<Icrop_insurance[]>(this.root_url+this.crop_controller_urls[0]+'GetCrop_Insurance',this.httpOptions);
    }

    //UserTable CRUD services
    getAllUserTable():Observable<IUserTables[]>
    {
        return this.http.get<IUserTables[]>(this.root_url+this.users_controller_urls[2]+'GetUserTables',this.httpOptions)
    }
    getUserTableCount() 
    {   let count:number;
        this.http.get<IUserTables[]>(this.root_url+this.users_controller_urls[2]+'GetUserTables',this.httpOptions).subscribe(data=>count=data.length)
        return count;
    }
    
    getUserTable(id:number)
    {
        return this.http.get<IUserTables>(this.root_url+this.users_controller_urls[2]+'GetUserTable'+id,this.httpOptions)
    }
    putUserTable()
    {}
    deleteUserTable(id:number)
    {
        this.http.delete(this.root_url+this.users_controller_urls[2]+'DeleteUserTable'+id,this.httpOptions)
    }
    postUserTable(val:IUserTables)
    {
        console.log(val)
        console.log(JSON.stringify(val))
        this.http.post<IUserTables>(this.root_url+this.users_controller_urls[2]+'PostUserTable',val,this.httpOptions)
        .subscribe(resp=>{console.log(JSON.stringify(resp))}
        );
    }
}