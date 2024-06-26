import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FilepathComponent } from './home/filepath/filepath.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchbarComponent,
    FilepathComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
