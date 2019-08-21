import { Injectable } from '@angular/core';
import{ HttpClient, } from '@angular/common/http'
import { Observable, } from 'rxjs';
import { AppError } from './app-error';

import { catchError, filter, map, shareReplay } from 'rxjs/operators'
import { NotFoundError } from './post/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string,private http: HttpClient) { }
  getAll(){
   return this.http.get(this.url)
   .pipe(map(Response=>Response))
   .pipe(catchError(this.handleError));
  }
  create(resource){
    return this.http.post(this.url, resource)
    .pipe(map(Response=>Response))
    .pipe(catchError(this.handleError));
  }
  update(resource){
    return this.http.patch(this.url + '/' + resource.id,({ isRead: true }))
    .pipe(map(Response=>Response))
    .pipe(catchError(this.handleError));
  }
  delete(id){
    return  this.http.delete(this.url+ '/'+id)
    .pipe(map(Response=>Response))
    .pipe(catchError(this.handleError));
  }
  private handleError(error: Response){
    if(error.status===400)
      return Observable.throw(new NotFoundError())
    if(error.status===404)
    return Observable.throw(new NotFoundError())
    return Observable.throw(new AppError());

  }
}
