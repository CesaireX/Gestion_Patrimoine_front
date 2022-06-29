import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { MatSelectModule} from '@angular/material/select'
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
import { NgxImageCompressService } from 'ngx-image-compress';
import { DetailpatrimoineComponent } from './detailpatrimoine/detailpatrimoine.component';
import { ProfilComponent } from './profil/profil.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { SweetAlertOptions } from 'sweetalert2';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BarreComponent } from './barre/barre.component';
import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';
import { CommentairesComponent } from './commentaires/commentaires.component';
const routes: Routes = [
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
    DetailpatrimoineComponent,
    ProfilComponent,
    AdminviewComponent,
    BarreComponent,
    CommentairesComponent,
  ],
  imports: [
    BrowserModule,MatProgressSpinnerModule,MatSnackBarModule, MatSelectModule, MatFormFieldModule ,HttpClientModule,MatButtonModule, RouterModule.forRoot(routes),ReactiveFormsModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAosX1kf5h0myKulz8AF9sDKxtMlI69Sko',
      libraries: ['places']
    }),
     FormsModule,
     AppRoutingModule, BrowserAnimationsModule,MatToolbarModule,MatCardModule,MatIconModule,MatFormFieldModule
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
