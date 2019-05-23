import { TestBed } from '@angular/core/testing';

import { UsersDataServiceService } from './users-data-service.service';

describe('UsersDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersDataServiceService = TestBed.get(UsersDataServiceService);
    expect(service).toBeTruthy();
  });
});
