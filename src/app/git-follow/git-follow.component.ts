import { Component, OnInit } from '@angular/core';
import { GitFollowService } from '../git-follow.service';

@Component({
  selector: 'git-follow',
  templateUrl: './git-follow.component.html',
  styleUrls: ['./git-follow.component.scss']
})
export class GitFollowComponent implements OnInit {
  followers;

  constructor(private service: GitFollowService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(followers=>this.followers=followers)
  }

}
