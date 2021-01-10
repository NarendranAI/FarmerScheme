import { ModuleWithProviders, NgModule } from '@angular/core';
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
import { SellRequestComponent } from './sell-request/sell-request.component';
import { SoldHistoryComponent } from './sold-history/sold-history.component';
import { FarmerPageComponent } from './farmer-page/farmer-page.component';
import { BidderPageComponent } from './bidder-page/bidder-page.component';


const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomePageComponent},
  {path:'Login',component:LoginComponent},
  {path:'FarmerRegistration',component:FarmerRegistrationComponent},
  {path:'TraderRegistration',component:TraderRegistrationComponent},
  {path:'InsuranceAvail',component:InsuranceAvailComponent},
  {path:'InsuranceClaim',component:InsuranceClaimComponent},
  {path:'CalculatePremium',component:CalculatePremiumComponent},
  {path:'ApplicationStatus',component:ApplicationStatusComponent},
  {path:'About',component:AboutComponent},
  //{path:'**',component:NotFoundComponent},
  {path:'SellRequest',component:SellRequestComponent},
  {path:'SoldHistory',component:SoldHistoryComponent},
  {path:'FarmerPage',component:FarmerPageComponent},
  {path:'BidderPage',component:BidderPageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routing:ModuleWithProviders=RouterModule.forRoot(routes);