import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacesAddPage } from './places-add.page';

describe('PlacesAddPage', () => {
  let component: PlacesAddPage;
  let fixture: ComponentFixture<PlacesAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlacesAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
