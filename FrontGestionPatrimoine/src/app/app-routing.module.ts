import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inscription', component: InscriptionsComponent },
  { path: '', component: AcceuilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
