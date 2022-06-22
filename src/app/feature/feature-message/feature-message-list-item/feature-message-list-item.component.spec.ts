import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMessageListItemComponent } from './feature-message-list-item.component';

describe('FeatureMessageListItemComponent', () => {
  let component: FeatureMessageListItemComponent;
  let fixture: ComponentFixture<FeatureMessageListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureMessageListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureMessageListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
