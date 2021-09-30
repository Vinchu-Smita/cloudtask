import { TestBed } from '@angular/core/testing';

import { StoringdataService } from './storingdata.service';

describe('StoringdataService', () => {
  let service: StoringdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoringdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
