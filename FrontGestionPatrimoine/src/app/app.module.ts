import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { HttpClientModule } from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AgmCoreModule } from '@agm/core';
import { AddpatrimoineComponent } from './addpatrimoine/addpatrimoine.component';
import { ListepatrimoinesComponent } from './listepatrimoines/listepatrimoines.component';

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
    AddpatrimoineComponent,
    ListepatrimoinesComponent,
  ],
  imports: [
    BrowserModule ,HttpClientModule, RouterModule.forRoot(routes),ReactiveFormsModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAosX1kf5h0myKulz8AF9sDKxtMlI69Sko',
      libraries: ['places']
    }),
     FormsModule,
     AppRoutingModule, BrowserAnimationsModule,MatToolbarModule,MatCardModule,MatIconModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
