import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { ContactusComponent } from './Contactus/Contactus.component';
import { AboutComponent } from './About/About.component';
import { TrainComponent } from './Train/Train.component';
import { TicketStatusComponent } from './TicketStatus/TicketStatus.component';

@NgModule({
  declarations: [						
    AppComponent,
      HomeComponent,
      LoginComponent,
      ContactusComponent,
      AboutComponent,
      TrainComponent,
      TicketStatusComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
