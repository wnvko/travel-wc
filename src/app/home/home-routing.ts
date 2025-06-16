import { Route } from '@vaadin/router';
import './login/login';
import './sign-up/sign-up';
import './reset-password/reset-password';
import './set-new-password/set-new-password';

export const routes: Route[] = [
  { path: 'set-new-password', component: 'app-set-new-password', name: 'Set new password' },
  { path: 'reset-password', component: 'app-reset-password', name: 'Reset password' },
  { path: 'sign-up', component: 'app-sign-up', name: 'Sign up' },
  { path: 'login', component: 'app-login', name: 'Login' },
  { path: '', component: 'app-login', name: 'Login' }
];
