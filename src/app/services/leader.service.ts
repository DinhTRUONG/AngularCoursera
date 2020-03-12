import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Leader } from '../shared/leader';

import { HttpClient } from '@angular/common/http';
import { baseurl } from '../shared/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  constructor(private http: HttpClient) {}

  getLeader(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseurl + 'leadership');
  }

  getFeatureLeader(): Observable<Leader> {
    return this.http
      .get<Leader[]>(baseurl + 'leadership?featured=true')
      .pipe(map(leader => leader[0]));
  }
}
