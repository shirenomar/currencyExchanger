import { TestBed } from '@angular/core/testing';

import { CurrenciesContext } from './currencies.context';

describe('Currencies.ContextService', () => {
  let service: CurrenciesContext;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrenciesContext);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
