import { BehaviorSubject, Observable } from "rxjs";
import { AppAction } from "./app-action";

export interface AppManager<T,R> {
  data$:BehaviorSubject<T[]>
  process(action:AppAction<T | Partial <T>>): Observable<R>
}
