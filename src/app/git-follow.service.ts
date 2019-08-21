import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitFollowService extends DataService {

  constructor(http: HttpClient) { 
    super('https://github.com/kiran505?tab=followers',http);
  }
}
