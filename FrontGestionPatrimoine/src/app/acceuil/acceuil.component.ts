import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm }   from '@angular/forms';
import {FrontservicesService} from '../services/frontservices.service'

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
public username: any;
connected= false;
  constructor(private router: Router, private Utilisateurservice: FrontservicesService) { }

  ngOnInit(): void {
     this.getusername();
  }

  getusername(){
    this.username=localStorage.getItem('identifiant');
    if(this.username!=null)
    {
      this.connected=true;
    }
    console.log(this.connected)
  }

  deconnexion(){

    localStorage.removeItem('user_name');

    this.router.navigate(['/login']);

}

}
