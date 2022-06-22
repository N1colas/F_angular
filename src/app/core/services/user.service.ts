import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppAction } from '../interfaces/app-action';
import { AppManager } from '../interfaces/app-manager';
import { AppUser } from '../interfaces/app-user';

@Injectable()
export class UserService implements AppManager<AppUser, {msg:string}> {

  data$ = new BehaviorSubject<AppUser[]>([]);

  process(action: AppAction<AppUser | Partial<AppUser>>): Observable<{ msg: string; }> {
    throw new Error('Method not implemented.');
  }
}
