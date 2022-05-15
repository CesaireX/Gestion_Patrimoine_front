import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddpatrimoineComponent } from './addpatrimoine/addpatrimoine.component';
import { ListepatrimoinesComponent } from './listepatrimoines/listepatrimoines.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inscription', component: InscriptionsComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'addpatrimoine', component: AddpatrimoineComponent },
  { path: 'listepatrimoine', component: ListepatrimoinesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
