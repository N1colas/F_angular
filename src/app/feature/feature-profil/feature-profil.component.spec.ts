import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProfilComponent } from './feature-profil.component';

describe('FeatureProfilComponent', () => {
  let component: FeatureProfilComponent;
  let fixture: ComponentFixture<FeatureProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
