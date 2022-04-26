import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm }   from '@angular/forms';
import {FrontservicesService} from '../services/frontservices.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user:any;
  constructor(private router: Router, private Utilisateurservice: FrontservicesService){}

  ngOnInit(): void {

  }

  submitLogin(form: NgForm){
    console.log(form.value);
    this.Utilisateurservice.login(form.value).subscribe(data=>{
      this.user=data;

      if(this.user === 0 || this.user === 1)
      {
        console.log("mauvais email");
      }
      else
      {
      console.log(data);
      localStorage.setItem('identifiant',this.user);
      this.router.navigateByUrl('/');
      }
    })
  }

  public test(){
    this.router.navigateByUrl('/login');
  }
}
