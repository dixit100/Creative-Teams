import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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



const routes: Routes = [
 
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // profile layout views
  { path: "profile", component: ProfileComponent },
  { path: "profile1", component: Profile1Component },
  { path: "profile2", component: Profile2Component },


  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
