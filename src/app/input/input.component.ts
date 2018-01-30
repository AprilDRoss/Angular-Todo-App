import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <h1>April's Todo List App</h1>
  <input [value]="title" (keyup.enter)="changeTitle(inputElement)" #inputElement>
  <button (click)="changeTitle(inputElement)">Save</button>  
  <p>{{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title:string = '';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeTitle(inputElementReference): void{
    this.submit.emit(inputElementReference.value);
  }

  // changeTitle(inputElementReference): void{
  //   console.log(inputElementReference);
  //   this.title = inputElementReference.value;
  // }

  // changeTitle(newTitle: string): void{
  //   this.submit.emit(newTitle);
  }
}
