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
  constructor(private router: Router, private Utilisateurservice: FrontservicesService) { }

  ngOnInit(): void {
this.getusername();
  }

  getusername(){
    this.Utilisateurservice.getUsername().subscribe(data=>{
      this.username=data;
    })
  }
}
