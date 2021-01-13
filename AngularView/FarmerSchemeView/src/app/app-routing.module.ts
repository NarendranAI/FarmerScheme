import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import { FarmerRegistrationComponent} from './farmer-registration/farmer-registration.component';
import { InsuranceAvailComponent} from './insurance-avail/insurance-avail.component';
import {TraderRegistrationComponent} from './trader-registration/trader-registration.component';
import {InsuranceClaimComponent} from './insurance-claim/insurance-claim.component';
import { CalculatePremiumComponent} from './calculate-premium/calculate-premium.component';
import {ApplicationStatusComponent} from './application-status/application-status.component';
import { AboutComponent } from './about/about.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';

import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { TraderHomeComponent } from './trader-home/trader-home.component';
import { MarketComponent } from './market/market.component';
import { BuyCropComponent } from './buy-crop/buy-crop.component';
import { SellCropComponent } from './sell-crop/sell-crop.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';


const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Buy',component:BuyCropComponent},
  {path:'Sell',component:SellCropComponent},
  {path:'Report',component:TransactionReportComponent},
  {path:'Market',component:MarketComponent},
  {path:'FarmerHome',component:FarmerHomeComponent},
  {path:'TraderHome',component:TraderHomeComponent},
  {path:'Admin',component:AdminScreenComponent},
  {path:'Home',component:HomePageComponent},
  {path:'Login',component:LoginComponent},
  {path:'FarmerRegistration',component:FarmerRegistrationComponent},
  {path:'TraderRegistration',component:TraderRegistrationComponent},
  {path:'InsuranceAvail',component:InsuranceAvailComponent},
  {path:'InsuranceClaim',component:InsuranceClaimComponent},
  {path:'CalculatePremium',component:CalculatePremiumComponent},
  {path:'ApplicationStatus',component:ApplicationStatusComponent},
  {path:'About',component:AboutComponent},
  {path:'UserProfile',component:UserProfileComponent},
  {path:'**',component:NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
