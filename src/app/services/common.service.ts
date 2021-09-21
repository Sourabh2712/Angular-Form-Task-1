import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  triggerUpdate:Subject<any>=new Subject();
  itemRefresh:Subject<any>=new Subject();
  constructor() { }
}
