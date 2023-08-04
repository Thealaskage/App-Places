import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: uuidv4(),
      title: 'Eiffel Tower',
      imageURL: 'https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg',
      comments: ['Awesome place', 'Wonderful experience', 'Great place to visit']
    },
    {
      id: uuidv4(),
      title: 'Statue of Liberty',
      imageURL: 'https://estatuadelalibertad.info/wp-content/uploads/2019/04/foto-estatua-de-la-libertad.jpg',
      comments: ['Awesome place', 'Wonderful experience', 'Great place to visit']
    }
  ];
  constructor() { }

  getPlaces(){
    return [...this.places];//return a copy of the places array
  }

  addPlace(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: uuidv4()
    });
  }

  getPlace(placeId: string) {
    return {...this.places.find(place => {
      return place.id === placeId;
    })};
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {//filter returns a new array
      return place.id !== placeId;//return all places that don't have the id of the place we want to delete
    });
  }


}
