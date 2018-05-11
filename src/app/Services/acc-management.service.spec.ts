import { TestBed, inject } from '@angular/core/testing';

import { AccManagementService } from './acc-management.service';

describe('AccManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccManagementService]
    });
  });

  it('should be created', inject([AccManagementService], (service: AccManagementService) => {
    expect(service).toBeTruthy();
  }));
});
