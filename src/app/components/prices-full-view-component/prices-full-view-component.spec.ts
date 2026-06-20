import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesFullViewComponent } from './prices-full-view-component';

describe('PricesFullViewComponent', () => {
  let component: PricesFullViewComponent;
  let fixture: ComponentFixture<PricesFullViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesFullViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricesFullViewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
