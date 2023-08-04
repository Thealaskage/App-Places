import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.page.html',
  styleUrls: ['./places-detail.page.scss'],
})
export class PlacesDetailPage implements OnInit {

  place!: Place;

  constructor(
    private activatedRouter: ActivatedRoute,
    private placeService: PlacesService,
    private router: Router,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){//if there is no placeId
        this.router.navigate(['/places']);// redirect to places
      }
      const placeId = paramMap.get('placeId');//get the placeId
      this.place = this.placeService.getPlace(placeId!);// get the place with the placeId
    });
  }
  async deletePlace(){
    const alertElement = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this place?',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placeService.deletePlace(this.place.id!);// ! means that we are sure that the place has an id
            this.router.navigate(['/places']);
        }
        }
      ]
    })
    await alertElement.present();
  }
}
