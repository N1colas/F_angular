import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePhotoComponent } from './feature-photo.component';

describe('FeaturePhotoComponent', () => {
  let component: FeaturePhotoComponent;
  let fixture: ComponentFixture<FeaturePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturePhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
