import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFollowComponent } from './git-follow.component';

describe('GitFollowComponent', () => {
  let component: GitFollowComponent;
  let fixture: ComponentFixture<GitFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
