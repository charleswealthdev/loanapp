import { TestBed } from '@angular/core/testing';

import { OfferloanService } from './offerloan.service';

describe('OfferloanService', () => {
  let service: OfferloanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferloanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
