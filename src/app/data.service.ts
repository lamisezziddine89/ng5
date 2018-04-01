import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

private goals = new BehaviorSubject<any>(['the initial goal','new set of goals']);

goal = this.goals.asObservable();

  constructor() { }

  ChangeGoals(goal){
    this.goals.next(goal);
  }

}
