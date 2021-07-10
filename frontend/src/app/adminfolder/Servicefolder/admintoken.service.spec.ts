import { TestBed } from '@angular/core/testing';

import { AdmintokenService } from './admintoken.service';

describe('AdmintokenService', () => {
  let service: AdmintokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmintokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
