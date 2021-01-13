import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EMPTY, Observable,throwError} from 'rxjs';
import {catchError,isEmpty,retry} from 'rxjs/operators';
import { Icrop } from './../models/Icrop';
import { Icrop_insurance } from './../models/Icrop_insurance';
import { IUserTables } from './../models/IUserTable';
import { Router } from '@angular/router';
import { IPolicyApplicants } from './../models/IPolicyApplicant';
import { IPolicyDetail } from './../models/IPolicyDetail';
import { IUserBankDetails } from './../models/IUserBankDetail';
import { IinsuranceAvail } from './../models/IinsuranceAvail';
import { identifierModuleUrl } from '@angular/compiler';
import { IinsuranceClaim } from './../models/IinsuranceClaim';
import { portfolio } from './../models/portfolio';
import {IUser} from './../models/IUser';
import { IStock } from './../models/IStock';
import { Ihistory } from './../models/Ihistory';
import { Iexchange } from './../models/Iexchange';


@Injectable
(
    {
        providedIn: 'root',
    }
)
export class SQLServerService
{
    //CURRENT USER
 
    public SetUser(input:IUser)
    {
        
        localStorage.setItem("User",JSON.stringify(input))
        let x=JSON.parse(localStorage.getItem('User'))
        alert("You are Successfully LoggedIn "+x[0].UserName);
    }
    public Logout()
    {
        let x=JSON.parse(localStorage.getItem('User'))
        alert("You are logged out of your account "+x[0].UserName);
        localStorage.clear();
        
    }



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
    getUserTableByEmail(email:string)
    { 
        email=email.replace(".","-");
        console.log(email);
        return this.http.get(this.root_url+'UserTable/'+'ByEmail/'+email,this.httpOptions);}

    Login(UT:IUserTables):Observable<IUser> 
    {
        return this.http.post<IUser>(this.root_url+'Login',UT,this.httpOptions);
    }
     
    getUserTableByMobile()
    {}
    getUserTableByType()
    {}
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
        return this.http.get<IUserTables>(this.root_url+this.users_controller_urls[2]+'GetUserTable/'+id,this.httpOptions)
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

    //BankDetail Table
    public postUserBankDetails(input:IUserBankDetails)
    {
        return this.http.post("http://localhost/FarmerScheme/api/UserBankDetails/PostUserBankDetail",
        input,this.httpOptions).subscribe(resp=>{console.log(JSON.stringify(resp))})
    }


    public getAllBank()
    {return this.http.get("http://localhost/FarmerScheme/api/UserBankDetails/GetUserBankDetails",this.httpOptions)}
    //Crop Table CRUD
    getCropByType(type:string):Observable<any[]>
    {
        type=type.replace(" ","-");
        return this.http.get<any[]>(this.root_url+"CropbySeason/"+type,this.httpOptions);
    }
    getCropByName(name:string)
    {
        name=name.replace(" ","-");
        return this.http.get(this.root_url+"CropByName/"+name);
    }
    //InsuranceAvail 
    postInsAvail(input:IinsuranceAvail)
    {
        return this.http.post(this.root_url+"InsuranceAvails/PostInsuranceAvail",input,this.httpOptions)
    }
    GetIAbyUserID(userid:number):Observable<number[]>
    {
        return this.http.get<number[]>("http://localhost/FarmerScheme/api/insuranceavails/getappnobyuserid/"+userid,this.httpOptions);
    }


    
    //Insurance Claim
    GetInsClaim(id:number)
    {
        return this.http.get<IinsuranceClaim>(this.root_url+"InsuranceClaims/GetInsuranceClaim/"+id,this.httpOptions)
    }

    PostInsClaim(input:IinsuranceClaim)
    {
        return this.http.post(this.root_url+"InsuranceClaims/PostInsuranceClaim",
        input,this.httpOptions)
    }
    getAllInsClaims()
    {return this.http.get<IinsuranceClaim[]>(this.root_url+"InsuranceClaims/GetInsuranceClaims",this.httpOptions)}

    putInsStatus(claim:IinsuranceClaim)
    {
        return this.http.put(this.root_url+"InsuranceClaims/PutStatus",claim,this.httpOptions)
    }
    //PolicyDetail
    public getPolicyDetails()
    {
        return this.http.get("http://localhost/FarmerScheme/api/PolicyDetails/GetPolicyDetails",this.httpOptions);
    }
    public postPolicyDetails(input:IPolicyDetail)
    {
        return this.http.post("http://localhost/FarmerScheme/api/PolicyDetails/PostPolicyDetail",input,this.httpOptions);
    }
    public getPolicyDetailByID(id:number)
    {
        return this.http.get<IPolicyDetail>("http://localhost/FarmerScheme/api/PolicyDetails/GetPolicyDetail/"+id,
        this.httpOptions)
    }

    //PolicyApplicant
    public getPolicyApplicant()
    {
        return this.http.get("http://localhost/FarmerScheme/api/policyApplicants/GetpolicyApplicants",this.httpOptions);
    }
    public getPolicyApplicantById(Id:number)
    {
        return this.http.get<IPolicyApplicants>("http://localhost/FarmerScheme/api/policyApplicants/GetpolicyApplicant/"+Id,
        this.httpOptions)
    }

    public postPolicyApplicant(input:IPolicyApplicants)
    {
        return this.http.post("http://localhost/FarmerScheme/api/policyApplicants//PostpolicyApplicant",input,this.httpOptions);
    }

    //Stock Tables
    public GetAllStock()
    {
        return this.http.get<IStock[]>(this.root_url+"Stocks/GetStocks",this.httpOptions)
    }
    public GetStockById(id:number)
    {
        return this.http.get<IStock>(this.root_url+"Stocks/GetStock/"+id,this.httpOptions)
    }
    public PutStock(id:number,stock:IStock)
    {
        return this.http.put(this.root_url+"Stocks/PutStock/"+id,stock,this.httpOptions)
    }
    public PostStock(stock:IStock)
    {
        return this.http.post(this.root_url+"Stocks/PostStock",stock,this.httpOptions)
    }
    public PutStockQuantity(stock:IStock)
    {return this.http.put(this.root_url+"stocks/putStockQuantity",stock,this.httpOptions)}

    //Exchange table
    public PostExchange(ex:Iexchange)
    {
        return this.http.post<Iexchange>(this.root_url+"exchanges/Postexchange",ex,this.httpOptions)
    }
    public GetExchangeById(id:number)
    {
        return this.http.get<Iexchange>(this.root_url+"exchanges/GetExchange/"+id,this.httpOptions)
    }

    //History Table
    public getAllHistory()
    {
        return this.http.get<Ihistory[]>(this.root_url+"histories/Gethistories",this.httpOptions)
    }
    public PostHistory(input:Ihistory)
    {
        return this.http.post(this.root_url+"histories/Posthistory",input,this.httpOptions)
    }
    public putHistory(id:number,body:Ihistory)
    {
        return this.http.put(this.root_url+"histories/Puthistory/"+id,body,this.httpOptions)
    }
    public putHistoryStatus(body:Ihistory)
    {
        return this.http.put(this.root_url+"histories/PutStatus",body,this.httpOptions)
    }
    
}