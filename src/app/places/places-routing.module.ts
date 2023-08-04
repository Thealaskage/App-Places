import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  },
  {
    path: 'places-detail',
    loadChildren: () => import('./places-detail/places-detail.module').then( m => m.PlacesDetailPageModule)
  },
  {
    path: 'new-place',
    loadChildren: () => import('./places-add/places-add.module').then( m => m.PlacesAddPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
