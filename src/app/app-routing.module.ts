import { TicketStatusComponent } from './TicketStatus/TicketStatus.component';
import { ContactusComponent } from './Contactus/Contactus.component';
import { AboutComponent } from './About/About.component';
import { TrainComponent } from './Train/Train.component';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Home/Home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Train',
    component:LoginComponent
  },
  {
    path:'TicketStatus',
    component:TicketStatusComponent
  },
  {
    path:'About',
    component:AboutComponent
  },
  {
    path:'Contactus',
    component:ContactusComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
