import { Component, EnvironmentInjector, OnInit, Renderer2  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

//RiskiFied service loaded on page load
import { RiskifiedBeaconServiceLegacyService } from './vendor/riskified/riskified-beacon.service';

import { DatadomeIntegrationService } from './vendor/datadome/datadome-integration.service';

const SCRIPT_PATH = '/src/app/vendor/datadome/datadome-tag.js';
declare let gapi: any;
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: any;
  element: any;
  
  
  constructor(
    private riskifiedLegacyService: RiskifiedBeaconServiceLegacyService,
    private datadomeService: DatadomeIntegrationService,
    private http: HttpClient,
    private renderer: Renderer2,
    ) {}
  ngOnInit(): void {
    const scriptElement = this.datadomeService.loadJsScript(this.renderer, SCRIPT_PATH);
    scriptElement.onload = () => {
     console.log('Datdome script loaded');
      console.log(gapi);

      // Load the JavaScript client library.
      // (the init() method has been omitted for brevity)
      gapi.load('client', this.init);
    }
    scriptElement.onerror = () => {
      console.log('Could not load the Google API Script!');
    }

   
  }
  init(arg0: string, init: any) {
    throw new Error('Method not implemented.');
  }

  // method to fetch the data from server/
  fetchDataFromServer(){
    this.posts = this.http.get('/api/comments/').pipe(map((posts) => {return posts;}))
    console.log(this.http.get('/api/comments/id'))
  }

}










