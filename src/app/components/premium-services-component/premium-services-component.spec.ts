import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumServicesComponent } from './premium-services-component';

describe('PremiumServicesComponent', () => {
  let component: PremiumServicesComponent;
  let fixture: ComponentFixture<PremiumServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiumServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumServicesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
