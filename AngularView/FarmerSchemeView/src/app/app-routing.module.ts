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
  {path:'**',component:NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
