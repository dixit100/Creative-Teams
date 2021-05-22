import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AuthComponent } from "./layouts/auth/auth.component";



// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { Profile1Component } from "./views/profile/profile1.component";
import { Profile2Component } from "./views/profile/profile2.component";



// components for views and layouts

import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    CardProfileComponent,
    AuthNavbarComponent,
    IndexNavbarComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    ProfileComponent,
    Profile1Component,
    Profile2Component,


  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
