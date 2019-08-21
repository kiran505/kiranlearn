import { TestBed } from '@angular/core/testing';

import { GitFollowService } from './git-follow.service';

describe('GitFollowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitFollowService = TestBed.get(GitFollowService);
    expect(service).toBeTruthy();
  });
});
