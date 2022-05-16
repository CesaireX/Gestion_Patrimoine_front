import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FrontservicesService} from '../services/frontservices.service';
import { Utilisateur } from '../interfaces/utilisateur';
import { Patrimoine } from '../interfaces/patrimoine';
@Component({
  selector: 'app-listepatrimoines',
  templateUrl: './listepatrimoines.component.html',
  styleUrls: ['./listepatrimoines.component.css']
})
export class ListepatrimoinesComponent implements OnInit {
  connected= false;
  public username: any;
  patrimoine: any;
  imagepath:any= 'http://127.0.0.1:8000/api/images/';
  constructor(private router:Router, private Utilisateurservice:FrontservicesService) { }

  ngOnInit(): void {
    this.getusername();
    this.getpatrimoines();
  }

  deconnexion(){
    localStorage.removeItem('user_name');
    this.router.navigate(['/login']);
}

getusername(){
  this.username=localStorage.getItem('identifiant');
  console.log(this.username);
  if(this.username!=null)
  {
    this.connected=true;
  }
  console.log(this.connected)
}


getpatrimoines(){
  this.Utilisateurservice.getpatrimoines().subscribe(data=>{
    this.patrimoine = data;
    console.log(this.patrimoine);
  })
}

}
