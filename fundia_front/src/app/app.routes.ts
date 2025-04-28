import { Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import {HomeComponent} from './components/home/home.component';
import { CampaignComponent } from './components/campaign/campaign.component';
export const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'user/register' ,component:RegisterComponent},
  {path:'user/login' ,component:LoginComponent},
  {path:'campaign' ,component:CampaignComponent},
];
