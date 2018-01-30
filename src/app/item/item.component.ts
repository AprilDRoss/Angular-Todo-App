import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <input type="checkbox" (click)="completeItem()"/>
    <p class="todo-title" [ngClass]="{'todo-complete':isComplete}">
      {{ todoItem.title }}
    </p>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input() todoItem: any;  
  
 isComplete: boolean = false;

 completeItem(){
   this.isComplete = !this.isComplete;
 }

  constructor() { }

  ngOnInit() {
  }

}
