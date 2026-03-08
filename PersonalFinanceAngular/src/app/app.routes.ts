import { Routes } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';
import { SignupPage } from './components/signup-page/signup-page';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'signup',
        component: SignupPage
    }
];
