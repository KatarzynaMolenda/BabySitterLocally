import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NeedHelpComponent} from './need-help/need-help.component';
import {RouterModule, Routes} from '@angular/router';
import {OfferHelpComponent} from './offer-help/offer-help.component';
import {MainViewComponent} from './main-view/main-view.component';
const root: Routes = [{
  path: 'create',
  component: RegisterComponent
}, {
  path: 'offer',
  component: OfferHelpComponent
}, {
  path: 'need',
  component: NeedHelpComponent
}, {
  path: '',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'main',
  component: MainViewComponent
}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NeedHelpComponent,
    OfferHelpComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(root)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

