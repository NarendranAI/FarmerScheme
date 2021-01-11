import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
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
import { FormsModule } from '@angular/forms';
import { FarmersListComponent } from './farmers-list/farmers-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
    FarmersListComponent,
    UserProfileComponent
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
