import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRateCardComponent } from './currency-rate-card.component';

describe('CurrencyRateCardComponent', () => {
  let component: CurrencyRateCardComponent;
  let fixture: ComponentFixture<CurrencyRateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyRateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
