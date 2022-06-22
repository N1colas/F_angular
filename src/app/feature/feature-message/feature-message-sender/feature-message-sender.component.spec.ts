import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMessageSenderComponent } from './feature-message-sender.component';

describe('FeatureMessageSenderComponent', () => {
  let component: FeatureMessageSenderComponent;
  let fixture: ComponentFixture<FeatureMessageSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureMessageSenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureMessageSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
