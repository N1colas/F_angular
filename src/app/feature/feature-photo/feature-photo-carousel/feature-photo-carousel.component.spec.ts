import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePhotoCarouselComponent } from './feature-photo-carousel.component';

describe('FeaturePhotoCarouselComponent', () => {
  let component: FeaturePhotoCarouselComponent;
  let fixture: ComponentFixture<FeaturePhotoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturePhotoCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePhotoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
