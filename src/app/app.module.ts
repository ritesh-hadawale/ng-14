import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY  } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule  } from 'ngx-google-analytics';
import { CookieService } from 'ngx-cookie-service';
import { RiskifiedBeaconServiceLegacyService } from './vendor/riskified/riskified-beacon.service';
import * as angular from 'angular';







@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule
  ],
  
  providers: [
    [CookieService],
    [RiskifiedBeaconServiceLegacyService],
    
   {
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.recaptcha.siteKey, 
    
   }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
