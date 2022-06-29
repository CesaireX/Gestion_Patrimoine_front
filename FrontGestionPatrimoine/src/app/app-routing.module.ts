import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { HomeComponent } from './home/home.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddpatrimoineComponent } from './addpatrimoine/addpatrimoine.component';
import { ListepatrimoinesComponent } from './listepatrimoines/listepatrimoines.component';
import { DetailpatrimoineComponent } from './detailpatrimoine/detailpatrimoine.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { BarreComponent } from './barre/barre.component';
import { CommentairesComponent } from './commentaires/commentaires.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inscription', component: InscriptionsComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: '', component: AcceuilComponent },
  { path: 'addpatrimoine', component: AddpatrimoineComponent },
  { path: 'listepatrimoine', component: ListepatrimoinesComponent },
  { path: 'detailpatrimoine', component: DetailpatrimoineComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'adminview', component: AdminviewComponent },
  { path: 'barre', component: BarreComponent },
  { path: 'commentaires', component: CommentairesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
