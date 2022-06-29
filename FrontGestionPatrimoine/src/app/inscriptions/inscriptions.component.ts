import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,NgForm  }   from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {FrontservicesService} from '../services/frontservices.service'
import { Utilisateur } from '../interfaces/utilisateur';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnInit {
  personnalisation=false;
  choix=true;
  public users: any;
  hide = false;
  hide2 = false;
  form: FormGroup;
  submitted: any;
  spinner= false;
  block= false;
  color=false;
  constructor( public http: HttpClient,public fb2: FormBuilder,private router: Router, private Utilisateurservice: FrontservicesService) {
    this.form=this.fb2.group({
      nom: ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+'),Validators.minLength(2)]],
      prenom: ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+'),Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      numero: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.minLength(8)]],
      profession: ['', [Validators.required,Validators.pattern('^[a-zA-Z \-\']+'),Validators.minLength(3)]],
      password:['', [Validators.required,Validators.minLength(3) ]],
      confirm_password: ['',[Validators.required,Validators.minLength(3) ]],
    },
    {
      validator: this.Utilisateurservice.MatchPassword('password', 'confirm_password'),
    })
   }

  ngOnInit(): void {
  }

  get FormControl() {
    return this.form.controls;
  }

  submitinscription(){

    this.submitted=true;
    this.spinner=true;
    this.block=true;
    this.color=true;
    setTimeout(() => {

      const formdata:any =new FormData();

      console.log(this.form.controls['nom'].value)
      console.log(this.form.controls['prenom'].value)
      console.log(this.form.controls['email'].value)
      console.log(this.form.controls['numero'].value)
      console.log(this.form.controls['profession'].value)
      console.log(this.form.controls['password'].value)
      console.log(this.form.controls['confirm_password'].value)


      formdata.append("email", this.form.controls['email'].value);
      formdata.append("password", this.form.controls['password'].value);
      formdata.append("confirm_password", this.form.controls['confirm_password'].value);
      formdata.append("nom", this.form.controls['nom'].value);
      formdata.append("prenom", this.form.controls['prenom'].value);
      formdata.append("numero", this.form.controls['numero'].value);
      formdata.append("profession", this.form.controls['profession'].value);


     const httpOptions={
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    };


    this.http.post('http://127.0.0.1:8000/api/registerUser',formdata,httpOptions).subscribe(data=>{
      this.users = data;
      console.log(this.users);
    })

    if(this.users=0)
    {
      Swal.fire({
        title: 'Oups?',
        text: 'Il semblerait que votre enregistrement est rencontré un probléme',
        icon: 'error',
      })
     this.ngOnInit();
    }

    else
    {
      Swal.fire({
        title: 'Felicitation?',
        text: 'Vous avez parfaitement été enregistrer',
        icon: 'success',
      })
     this.router.navigateByUrl('/login');
    }


        this.spinner=false;
        this.block=false;
        this.color=false;

    },5000)


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
