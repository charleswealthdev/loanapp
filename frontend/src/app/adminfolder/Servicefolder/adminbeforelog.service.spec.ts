import { TestBed } from '@angular/core/testing';

import { AdminbeforelogService } from './adminbeforelog.service';

describe('AdminbeforelogService', () => {
  let service: AdminbeforelogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminbeforelogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
