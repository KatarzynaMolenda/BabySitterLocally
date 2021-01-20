import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NeedHelpComponent} from './need-help/need-help.component';
import {RouterModule, Routes} from '@angular/router';
import {OfferHelpComponent} from './offer-help/offer-help.component';
import {MainViewComponent} from './main-view/main-view.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ManageChildrenComponent} from './manage-children/manage-children.component';
import {AuthorizationInterceptor} from './authorization.interceptor';
import {WelcomeViewComponent} from './welcome-view/welcome-view.component';

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
  path: 'login',
  component: LoginComponent
}, {
  path: 'register',
  component: RegisterComponent
}, {
  path: 'main',
  component: MainViewComponent
}, {
  path: 'manage-children',
  component: ManageChildrenComponent
}, {
  path: '',
  component: WelcomeViewComponent
}, {
  path: 'forgot-password',
  component: ForgotPasswordComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NeedHelpComponent,
    OfferHelpComponent,
    MainViewComponent,
    ForgotPasswordComponent,
    ManageChildrenComponent,
    WelcomeViewComponent
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
  providers: [{
    useClass: AuthorizationInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

