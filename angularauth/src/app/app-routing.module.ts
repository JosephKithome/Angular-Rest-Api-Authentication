import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { EventsComponent } from './auth/main/events/events.component';
import { SpecialeventsComponent } from './auth/main/specialevents/specialevents.component';
import { RegistrationComponent } from './auth/register/registration/registration.component';
import { RoleguardsGuard } from './guard/roleguards.guard';

const routes: Routes = [
  {path: '', redirectTo: "/events", pathMatch:'full'},// default redirect 
  {path: "events", component: EventsComponent},
  {path: "special", component:SpecialeventsComponent, canActivate: [RoleguardsGuard]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
