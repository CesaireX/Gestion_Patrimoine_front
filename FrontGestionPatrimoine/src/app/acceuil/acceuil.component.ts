import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm }   from '@angular/forms';
import {FrontservicesService} from '../services/frontservices.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
public username: any;
spinnerdeconnect:any;
latitude: number = 12.341731853681724;
longitude: number = -1.4921732960342848;
address: any;
private geoCoder:any;
connected= false;
blocage= false;
admin: any;

  @ViewChild('search')
  public searchElementRef!: ElementRef;



  constructor(private router: Router, private Utilisateurservice: FrontservicesService,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.Utilisateurservice.loading.subscribe((isloading)=>{
      this.spinnerdeconnect=isloading;
      console.log(this.spinnerdeconnect);
    })
     this.getusername();
     this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });
  }

  simpleAlert(){
    Swal.fire('Hello Angular');
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

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }


  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  }

  addMarker(lat: number, lng: number) {
    this.latitude = lat;
    this.longitude = lng;
    }

}
