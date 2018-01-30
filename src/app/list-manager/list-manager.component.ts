import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <todo-input (submit)="addItem($event)"></todo-input>
    <ul>
      <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item"></todo-item>
    </li>
    </ul>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }
  // todoList = [
  //   {title: 'install NodeJS'},
  //   {title: 'install Angular CLI'},
  //   {title: 'create new app'},
  //   {title: 'serve app'},
  //   {title: 'develop app'},
  //   {title: 'deploy app'}
  // ];
  addItem(title:string): void{
    this.todoList.push({title});
  }

}
