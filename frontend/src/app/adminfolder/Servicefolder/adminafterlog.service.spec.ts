import { TestBed } from '@angular/core/testing';

import { AdminafterlogService } from './adminafterlog.service';

describe('AdminafterlogService', () => {
  let service: AdminafterlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminafterlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
