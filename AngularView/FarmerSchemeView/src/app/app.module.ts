import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import {routing} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SQLServerService } from './services/SQLServer.service';
import { CropInsuranceComponent } from './crop-insurance/crop-insurance.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { TraderRegistrationComponent } from './trader-registration/trader-registration.component';
import { InsuranceAvailComponent } from './insurance-avail/insurance-avail.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';
import { CalculatePremiumComponent } from './calculate-premium/calculate-premium.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FarmerPageComponent } from './farmer-page/farmer-page.component';
import { SellRequestComponent } from './sell-request/sell-request.component';
import { SoldHistoryComponent } from './sold-history/sold-history.component';
import { BidderPageComponent } from './bidder-page/bidder-page.component';
//import { CertificateUploadComponent } from './certificate-upload/certificate-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    CropInsuranceComponent,
    HomePageComponent,
    NotFoundComponent,
    LoginComponent,
   
    TraderRegistrationComponent,
    InsuranceAvailComponent,
    InsuranceClaimComponent,
    CalculatePremiumComponent,
    ApplicationStatusComponent,
    FarmerRegistrationComponent,
    AboutComponent,
    NavBarComponent,
    FarmerPageComponent,
    SellRequestComponent,
    SoldHistoryComponent,
    BidderPageComponent,
   // CertificateUploadComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SQLServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
