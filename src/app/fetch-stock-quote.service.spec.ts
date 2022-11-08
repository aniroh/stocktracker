import { TestBed } from '@angular/core/testing';

import { FetchStockQuoteService } from './fetch-stock-quote.service';

describe('FetchStockQuoteService', () => {
  let service: FetchStockQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchStockQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
