import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SQLServerService } from './services/SQLServer.service';
import { CropInsuranceComponent } from './crop-insurance/crop-insurance.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CropInsuranceComponent,
    HomePageComponent,
    NotFoundComponent,
    AboutComponent,
    NavBarComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SQLServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
