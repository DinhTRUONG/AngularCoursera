import { Injectable } from '@angular/core';
import { LEADERS } from './../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor() {}

  getLeader() {
    return LEADERS;
  }

  getFeatureLeader() {
    return LEADERS.filter(leader => leader.featured)[0];
  }
}
