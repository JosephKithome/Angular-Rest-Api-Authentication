import { TestBed } from '@angular/core/testing';

import { RoleguardsGuard } from './roleguards.guard';

describe('RoleguardsGuard', () => {
  let guard: RoleguardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleguardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
