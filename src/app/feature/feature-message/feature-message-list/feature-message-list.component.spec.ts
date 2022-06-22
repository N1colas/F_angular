import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMessageListComponent } from './feature-message-list.component';

describe('FeatureMessageListComponent', () => {
  let component: FeatureMessageListComponent;
  let fixture: ComponentFixture<FeatureMessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureMessageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
