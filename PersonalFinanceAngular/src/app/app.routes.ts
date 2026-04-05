import { Routes } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';
import { SignupPage } from './components/signup-page/signup-page';
import { DashboardPage } from './components/dashboard-page/dashboard-page';
import { routeGuard } from './services/auth-security/route-guard-guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'signup',
        component: SignupPage
    },
    {
      path: 'dashboard',
      component: DashboardPage,
      canActivate:[routeGuard]
    },
    {
      path: '**',
      component: LoginPage
    }

];
