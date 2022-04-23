import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Utilisateur } from '../interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})

export class FrontservicesService{

  public utilisateur: Utilisateur[] = [];
  public username: any;

  constructor(private httpClient: HttpClient) { }

 create(utilisateur: Utilisateur){
    console.log(utilisateur.profession);
    return this.httpClient.post('http://127.0.0.1:8000/api/registerUser',utilisateur);
  }

  login(utilisateur: Utilisateur){
    console.log(utilisateur.email);
    return this.httpClient.post('http://127.0.0.1:8000/api/verifyprofil',utilisateur);
  }

  getUsername() {
    this.username=localStorage.getItem('identifiant');
    console.log(this.username);
    return this.httpClient.get('http://127.0.0.1:8000/api/getUsers',{params: new HttpParams().set('email',this.username)});

  }

}
