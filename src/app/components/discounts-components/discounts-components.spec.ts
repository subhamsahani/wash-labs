import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsComponents } from './discounts-components';

describe('DiscountsComponents', () => {
  let component: DiscountsComponents;
  let fixture: ComponentFixture<DiscountsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountsComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountsComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
