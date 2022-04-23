import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { Observable } from 'rxjs';
import {FrontservicesService} from '../services/frontservices.service'
import { Utilisateur } from '../interfaces/utilisateur';
@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {
  personnalisation=false;
  choix=true;
  public users: any;

  constructor(public Utilisateurservice: FrontservicesService) { }

  ngOnInit(): void {
  }

  submitinscription(form: NgForm){
    console.log(form.value);
    this.Utilisateurservice.create(form.value).subscribe(data=>{
      this.users = data;
      console.log(this.users);
    })
  }

  activate(){
    this.personnalisation=true;
    this.choix=false;
  }

  desactivate(){
    this.personnalisation=false;
    this.choix=true;
  }

}
