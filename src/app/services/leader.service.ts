import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LEADERS } from './../shared/leaders';
import { Leader } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor() {}

  getLeader(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getFeatureLeader(): Observable<Leader> {
    return of(LEADERS.filter(leader => leader.featured)[0]).pipe(delay(2000));
  }
}
