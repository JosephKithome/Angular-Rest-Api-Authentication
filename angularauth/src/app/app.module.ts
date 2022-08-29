import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './auth/register/registration/registration.component';
import { LoginComponent } from './auth/login/login/login.component';
import { EventsComponent } from './auth/main/events/events.component';
import { SpecialeventsComponent } from './auth/main/specialevents/specialevents.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { NetworkService } from './services/network.service';
import { RoleguardsGuard } from './guard/roleguards.guard';
import { TokeninterceptorService } from './services/token/tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    EventsComponent,
    SpecialeventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NetworkService,
    RoleguardsGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
