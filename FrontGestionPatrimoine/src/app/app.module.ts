import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { HttpClientModule } from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InscriptionsComponent,
    AcceuilComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule,AppRoutingModule, BrowserAnimationsModule,MatToolbarModule,MatCardModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
