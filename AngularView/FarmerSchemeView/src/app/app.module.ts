import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SQLServerService } from './services/SQLServer.service';
import { CropInsuranceComponent } from './crop-insurance/crop-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    CropInsuranceComponent
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
