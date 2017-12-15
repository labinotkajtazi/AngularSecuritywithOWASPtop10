import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XssComponent } from './components/xss/xss.component';
import { BasmComponent } from './components/basm/basm.component';
import { CsrfComponent } from './components/csrf/csrf.component';
import { IdorComponent } from './components/idor/idor.component';
import { InjectionComponent } from './components/injection/injection.component';
import { MflacComponent } from './components/mflac/mflac.component';
import { SdeComponent } from './components/sde/sde.component';
import { SmComponent } from './components/sm/sm.component';
import { UckvComponent } from './components/uckv/uckv.component';
import { UrfComponent } from './components/urf/urf.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth-guard.service';
import { RegisterLoginGuard } from './auth/register-login-guard.service';
import { AuthService} from './auth/auth.service';
import { NavigationStart, Router } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'xss', component: XssComponent },
    { path: 'basm', component: BasmComponent },
    { path: 'csrf', component: CsrfComponent, canActivate: [AuthGuard] },
    { path: 'idor', component: IdorComponent },
    { path: 'injection', component: InjectionComponent },
    { path: 'mflac', component: MflacComponent, canActivate: [AuthGuard] },
    { path: 'sde', component: SdeComponent },
    { path: 'sm', component: SmComponent },
    { path: 'uckv', component: UckvComponent },
    { path: 'urf', component: UrfComponent },
    { path: 'login', component: LoginComponent, canActivate: [RegisterLoginGuard] },
    { path: 'signup', component: SignupComponent, canActivate: [RegisterLoginGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}