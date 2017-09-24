import { TestBed, inject } from '@angular/core/testing';

import { HttpSerService } from './http-ser.service';

describe('HttpSerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSerService]
    });
  });

  it('should be created', inject([HttpSerService], (service: HttpSerService) => {
    expect(service).toBeTruthy();
  }));
});
