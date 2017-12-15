import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InjectionComponent } from './components/injection/injection.component';
import { XssComponent } from './components/xss/xss.component';
import { BasmComponent } from './components/basm/basm.component';
import { IdorComponent } from './components/idor/idor.component';
import { SmComponent } from './components/sm/sm.component';
import { SdeComponent } from './components/sde/sde.component';
import { MflacComponent } from './components/mflac/mflac.component';
import { CsrfComponent } from './components/csrf/csrf.component';
import { UckvComponent } from './components/uckv/uckv.component';
import { UrfComponent } from './components/urf/urf.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RegisterLoginGuard } from './auth/register-login-guard.service';
import { FooterComponent } from './footer/footer.component';
import { CsrfService } from './components/csrf/csrf.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InjectionComponent,
    XssComponent,
    BasmComponent,
    IdorComponent,
    SmComponent,
    SdeComponent,
    MflacComponent,
    CsrfComponent,
    UckvComponent,
    UrfComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, DataStorageService, AuthGuard, RegisterLoginGuard, CsrfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
