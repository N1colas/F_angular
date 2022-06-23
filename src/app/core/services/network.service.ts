import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  online$ = new BehaviorSubject(true);

  constructor(
    http:HttpClient
  ) {
    console.warn('all network activities velong to me only');

    this.initGlobalHandlers();
   }

   initGlobalHandlers(){
      window.addEventListener('online', () => this.online$.next(true));
      window.addEventListener('offline', () => this.online$.next(false));
   }
}
