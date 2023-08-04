import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { Photo } from './photos.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  photos: Photo[] = [];

  constructor(private photosService: PhotosService) {}

  ngOnInit(){
    this.photosService.getPhotos()
    .subscribe(data =>{
      console.log(data);
      this.photos = data})
  }
}
