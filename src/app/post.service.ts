import { Injectable } from '@angular/core';
import{ HttpClient, } from '@angular/common/http'
import { Observable, } from 'rxjs';
import { AppError } from './app-error';
import { DataService } from './data-service';

import { catchError, filter, map, shareReplay } from 'rxjs/operators'
import { NotFoundError } from './post/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
  


  constructor(http: HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts',http)
  }
  
}
