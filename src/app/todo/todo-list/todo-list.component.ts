import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todoType } from '../todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  imports:[CommonModule],
  styleUrls: ['./todo-list.component.css'],
  standalone:true
})
export class TodoListComponent implements OnInit {


  @Input() todoList:todoType[] = [];

  @Output() todoEvent = new EventEmitter()
  ngOnInit(): void {

  }

  handleClick(todo:todoType){
    this.todoEvent.emit(todo)
    // console.log("Todo Clicked",todo)
  }

}
