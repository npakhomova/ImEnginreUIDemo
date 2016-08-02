import { RouterConfig }  from '@angular/router';
import { AppComponent } from './components/app/app.component';

export const routesConfig: RouterConfig = [
  {
    path: 'reports',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
