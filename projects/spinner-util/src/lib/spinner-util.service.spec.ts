import { TestBed } from '@angular/core/testing';

import { SpinnerUtilService } from './spinner-util.service';

describe('SpinnerUtilService', () => {
  let service: SpinnerUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
