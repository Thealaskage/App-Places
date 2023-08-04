import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-places-add',
  templateUrl: './places-add.page.html',
  styleUrls: ['./places-add.page.scss'],
})
export class PlacesAddPage implements OnInit {

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title: IonInput, imageURL: IonInput){
    this.placesService.addPlace(title.value!.toString(), imageURL.value!.toString());
    this.router.navigate(['/places']);
  }

}
