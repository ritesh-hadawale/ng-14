import { Component } from '@angular/core';
import { RiskifiedBeaconServiceLegacyService } from './services/riskified-beacon-service-legacy.service';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
  constructor(private riskifiedLegacyService: RiskifiedBeaconServiceLegacyService) {}
  ngOnInit(): void {}
}



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
// import { ReCaptchaV3Service } from 'ng-recaptcha';
// import { UserRegistrationModel} from './user-registration-model.model'
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';


// // import { ReCaptchaService } from './re-captcha.service';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//     title = 'Angular14App';
//     registerForm!: FormGroup;
//     submitted = false;
//     reCAPTCHAToken: string = "";
//     tokenVisible: boolean = false;
//     registrationInfo!: UserRegistrationModel;

    
        

    
//     constructor(private formBuilder: FormBuilder, private recaptchaV3Service: ReCaptchaV3Service,
//            private riskifiedLegacyService: RiskifiedBeaconServiceLegacyService
//         ) {}
//     ngOnInit() {
//         // this.riskifiedLegacyService.myFunction();
//         this.registerForm = new FormGroup({
//             UserName: new FormControl(),
//             UserEmailId: new FormControl(),
//             password: new FormControl(),
//             confirmPassword: new FormControl(),
//         })
       
//     }
//     onSubmit() {
//         this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
//             this.tokenVisible = true;
//             this.reCAPTCHAToken = `Token [${token}] generated`;
//         });
//     }
    
    
    
// }









