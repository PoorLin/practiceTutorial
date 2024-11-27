import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {CommonComponent} from './common/common.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const routes: Routes = [
  {
    path:'',
    component: CommonComponent,
    children :[
      {
        path:'home',
        component:HomeComponent,
      },
    ]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  }
];
