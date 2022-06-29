import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router, ActivatedRoute } from '@angular/router';
import {FrontservicesService} from '../services/frontservices.service';
@Component({
  selector: 'app-barre',
  templateUrl: './barre.component.html',
  styleUrls: ['./barre.component.css']
})
export class BarreComponent implements OnInit {
  connected= false;
  blocage= false;
  admin: any;
  username: any;
  spinnerdeconnect: any;
  constructor( private Utilisateurservice: FrontservicesService, private router:Router) { }

  ngOnInit(): void {
    this.getusername();
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
  }

  deconnexion(){

    Swal.fire({
      title: 'etes vous sur?',
      text: 'Voulez vous vous deconnecter?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui!',
      cancelButtonText: 'Non'
    }).then((result) => {

      if (result.value) {

        this.Utilisateurservice.setloading(true)

        setTimeout(()=> {
                localStorage.removeItem('identifiant');
                this.Utilisateurservice.setloading(false)
        },5000)

        this.router.navigateByUrl('/login');
      }

      else if (result.dismiss === Swal.DismissReason.cancel) {

        Swal.fire({
          text: 'Opération annulée',
          icon: 'warning',
      })
      }
    })
}

deconnexionadmin(){

  Swal.fire({
    title: 'Voulez vous vraiment vous deconnecter?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui!',
    cancelButtonText: 'Non'
  }).then((result) => {
    if (result.value) {

      localStorage.removeItem('admin');

      this.router.navigateByUrl('/login');
    }

    else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        text: 'Opération annulée',
        icon: 'warning',
    })
    }
  })

}



}
