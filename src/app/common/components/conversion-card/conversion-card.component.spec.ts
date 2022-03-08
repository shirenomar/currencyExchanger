import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionCardComponent } from './conversion-card.component';

describe('ConversionCardComponent', () => {
  let component: ConversionCardComponent;
  let fixture: ComponentFixture<ConversionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
