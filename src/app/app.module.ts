import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import {BoldchatPlpComponent} from "./boldchat/vshoppeBoldchatPlp.component";
import { NewComponentComponent } from './new-component/new-component.component'
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY  } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule  } from 'ngx-google-analytics';
import { CookieService } from 'ngx-cookie-service';
import { RiskifiedBeaconServiceLegacyService } from './services/riskified-beacon-service-legacy.service';
import * as angular from 'angular';







@NgModule({
  declarations: [
    AppComponent,
    BoldchatPlpComponent,
    NewComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    RecaptchaV3Module,
    NgxGoogleAnalyticsModule.forRoot('MEASUREMENT-ID'),
    NgxGoogleAnalyticsRouterModule,
    ReactiveFormsModule,
    FormsModule,
    
    
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
