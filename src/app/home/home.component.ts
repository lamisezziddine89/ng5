import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations'
import {DataService} from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number;
  goaltxt:string = "My First Life goal";
  goals =[];

  constructor(private _data:DataService) { }

  ngOnInit() {
     
     this._data.goal.subscribe(res=> this.goals = res);
     this._data.ChangeGoals(this.goals);
     this.itemCount =this.goals.length;
  }

  addItem(){
    this.goals.push(this.goaltxt);
    this.goaltxt ='';    
    this._data.ChangeGoals(this.goals);
    this.itemCount =this.goals.length;
  }

  removeItem(i){
    this.goals.splice(i,1);
    this._data.ChangeGoals(this.goals);
  }

}
