import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FrontservicesService} from '../services/frontservices.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {

  constructor(public utilisateurservice:FrontservicesService, public router:Router,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
