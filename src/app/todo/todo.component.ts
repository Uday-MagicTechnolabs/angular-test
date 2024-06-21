import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

export type todoType = {
  subject:string;
  description:string;
}

@Component({
  selector: 'app-todo',
  imports:[CommonModule,TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  standalone:true
})
export class TodoComponent implements OnInit {
  todos:todoType[] = [] ;
  ngOnInit(): void {
    this.todos = [
      {subject:"TODO 1",description:"This is Description For TODO 1"},
      {subject:"TODO 2",description:"This is Description For TODO 2"},
      {subject:"TODO 3",description:"This is Description For TODO 3"},
      {subject:"TODO 4",description:"This is Description For TODO 4"},
      {subject:"TODO 5",description:"This is Description For TODO 5"},
    ]
  }


  handleDelete(todo:todoType){
    console.debug("todo Delte",todo)
  }

}
