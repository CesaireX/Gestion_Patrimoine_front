import { MatSnackBar } from '@angular/material/snack-bar';
import { Patrimoine } from './../interfaces/patrimoine';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FrontservicesService} from '../services/frontservices.service';
import { ConstantPool } from '@angular/compiler';
import {  FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-detailpatrimoine',
  templateUrl: './detailpatrimoine.component.html',
  styleUrls: ['./detailpatrimoine.component.css']
})
export class DetailpatrimoineComponent implements OnInit {
  blocage= false;
  admin: any;
  latitude: any;
  longitude: any ;
  patrimoines: any;
  id: any;
  username: any ;
  connected= false;
  form: FormGroup;
  submitted = true;
  imagepath:any= 'http://127.0.0.1:8000/api/images/';
  totalcomments: any;
  comments: any;
  userdetails: any;
  spiner2: any;
  message="ok";
  action="annuler";
  limit=2;
  idresponse:any="";
  name:string="";
  replies: any;

  constructor(public snackbar:MatSnackBar, private ngZone: NgZone,public fb:FormBuilder,private router:Router,private aroute:ActivatedRoute,private Utilisateurservice:FrontservicesService,public http: HttpClient) {

    this.form=this.fb.group({
      userid:['', Validators.required ],
      patid:['', Validators.required ],
      comment:null,
      username:['', Validators.required ],
      parentid:null
    })

   }

   get all() {
    return this.form.controls;
    }


  ngOnInit(): void {

    this.getusername();

    this.aroute.queryParams.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id)
    })

this.Utilisateurservice.getapatrimoine(this.id).subscribe(data=>{
  this.patrimoines = data;
  console.log(this.patrimoines);
})
this.getlat();
this.getlong();
this.getcommentnumber();
this.getcomments();
this.getuser();
this.getreplies();
  }

  getcommentnumber(){

    this.aroute.queryParams.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id)
    })

    this.Utilisateurservice.getcommentsnumber(this.id).subscribe(data=>{
      this.totalcomments = data;
      console.log(this.totalcomments);
    })
   }

   getlat()
   {

    this.aroute.queryParams.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id)
    })

this.Utilisateurservice.getlat(this.id).subscribe(data=>{
  this.latitude = data;
  console.log(this.latitude);
})

   }

   getlong()
   {

    this.aroute.queryParams.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id)
    })

this.Utilisateurservice.getlong(this.id).subscribe(data=>{
  this.longitude = data;
  console.log(this.longitude);
})

   }

   getcomments()
   {
    this.aroute.queryParams.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id)
    })

    this.Utilisateurservice.getprimarycomment(this.id).subscribe(data=>{
      this.comments = data;
      console.log(this.comments);
    })

   }



   getreplies()
   {
    this.aroute.queryParams.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id)
    })

    this.Utilisateurservice.getprimarycomment(this.id).subscribe(data=>{
      this.replies = data;
      console.log(this.replies);
    })

   }


  getusername(){
    this.username=localStorage.getItem('identifiant');
    console.log(this.username);

    this.admin=localStorage.getItem('admin');

  if(this.admin!=null)
  {
    this.blocage=true;
    console.log(this.blocage)
  }

    if(this.username!=null)
    {
      this.connected=true;
    }
    console.log(this.connected)
    console.log(this.username)
  }

  validerpatrimoine()
  {

    Swal.fire({
      title: 'etes vous sur?',
      text: 'Voulez vous vraiment Valider ce patrimoine??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, le valider!',
      cancelButtonText: 'Non, le laisser'
    }).then((result) => {
      if (result.value) {

        this.aroute.queryParams.subscribe((params)=>{
          this.id=params['id'];
          console.log(this.id)
        })

        this.Utilisateurservice.validerpatrimoine(this.id).subscribe(data=>{
          this.patrimoines = data;
          console.log(this.patrimoines);
        })

        Swal.fire(
          'success!',
          'Le patrimoine a été mis a jour.',
          'success'
        )
        this.ngOnInit();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Le patrimoine est resté inchangé',
          'error'
        )
        this.ngOnInit();
      }
    })
  }

  response(id:any,name:any)
  {
   this.idresponse=id;
   this.name=name;
  }

  actualiser()
  {
    this.aroute.queryParams.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id)
    })

    this.Utilisateurservice.getcommentsnumber(this.id).subscribe(data=>{
      this.totalcomments = data;
      console.log(this.totalcomments);
    })

    this.limit=this.totalcomments
  }

  actualiserplus()
  {
    this.limit=2
  }

  retirerpatrimoine()
  {

    Swal.fire({
      title: 'etes vous sur de vouloir retirer ce patrimoine?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, le retracter!',
      cancelButtonText: 'Non, le garder'
    }).then((result) => {
      if (result.value) {

        this.aroute.queryParams.subscribe((params)=>{
          this.id=params['id'];
          console.log(this.id)
        })

        this.Utilisateurservice.retirerpatrimoine(this.id).subscribe(data=>{
          this.patrimoines = data;
          console.log(this.patrimoines);
        })

        Swal.fire(
          'success!',
          'Le patrimoine a été mis a jour.',
          'success'
        )
        this.ngOnInit();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Le patrimoine est resté inchangé',
          'error'
        )
        this.ngOnInit();
      }
    })
  }

  redirect(id:number)
{
  console.log(id)
  this.router.navigate(['/commentaires'], { queryParams: {id: id}})
}

  getuser(){
    this.username=localStorage.getItem('identifiant');

    this.Utilisateurservice.getuser(this.username).subscribe(data=>{
      this.userdetails = data;
      console.log(this.userdetails);
    })

  }

  comment()
  {

    if(this.form.controls['userid'].value==null || this.form.controls['patid'].value==null || this.form.controls['comment'].value==null || this.form.controls['username'].value==null || this.form.controls['parentid'].value==null)
    {
      Swal.fire({
        title: 'Oups?',
        text: 'Veuillez a remplir tous les champs obligatoires',
        icon: 'error',
      })
    }

    else
    {
      this.spiner2=true;

      setTimeout(()=>{

        this.submitted = true;
        const formdata:any =new FormData();
        formdata.append("userid", this.form.controls['userid'].value);
        formdata.append("patid", this.form.controls['patid'].value);
        formdata.append("comment", this.form.controls['comment'].value);
        formdata.append("username", this.form.controls['username'].value);
        formdata.append("parentid", this.form.controls['parentid'].value);

        const httpOptions={
          headers: new HttpHeaders({
            'Accept': 'application/json'
          })
        };

        this.http.post('http://127.0.0.1:8000/api/comment',formdata,httpOptions).subscribe({
          next: (v) => console.log('success: ',v)
        })

        console.log([...formdata]);
        this.spiner2=false;

        this.ngOnInit();

        this.snackbar.open('Commentaire publié!!','ok', {
          duration: 2000,
        });

      },5000)

    }

  }

  open(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }


}
