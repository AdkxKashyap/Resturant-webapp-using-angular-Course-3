import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';
@Injectable()
export class LeaderService {

  constructor(private restangular:Restangular) { }
//Convert Observable to promise
 getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders',id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured:true})
    .map(leader=>leader[0]);
  }
}


