import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CanActivate } from './auth.guards';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  ///{path: "home", component:HomeComponent, canActivate:[CanActivate]},
  {path: "home", component:HomeComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
