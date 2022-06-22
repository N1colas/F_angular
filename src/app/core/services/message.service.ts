import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppAction } from '../interfaces/app-action';
import { AppManager } from '../interfaces/app-manager';
import { AppMessage } from '../interfaces/app-message';

@Injectable()
export class MessageService implements AppManager<AppMessage, {msg:string}> {
  data$ = new BehaviorSubject<AppMessage[]>([]);

  constructor() {
    console.log('MessageService');
   }

  process(action: AppAction<AppMessage | Partial<AppMessage>>): Observable<{ msg: string; }> {
    throw new Error('Method not implemented.');
  }
}
