import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todoList: Todo[] = [
    new Todo(1,"First Task",true),
    new Todo(2,"Second Task",true),
    new Todo(3,"Third Task",true),
    new Todo(4,"Fourth Task",false),
  ];

  constructor() { }

  getTodoList():Todo[] {
    return this.todoList;
  }

  deleteTodo(id:number){
    const index = this.todoList.findIndex((mainObject) => mainObject.id === id);
    this.todoList[index].active = false;
  }

  addTodo(task:string){
    const lastIndex = this.todoList[this.todoList.length -1].id;
    this.todoList.push(new Todo(lastIndex+1,task,true));
  }

}
