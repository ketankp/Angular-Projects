import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoServiceService } from '../service/todo-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todoList:Todo[] = [];
  taskForm!:FormGroup;

  constructor(public todoService:TodoServiceService,
    public formBuilder:FormBuilder){
      this.taskForm = this.formBuilder.group({
        taskDetails: ['', Validators.required]
      });
  }

  ngOnInit(){
    this.todoList = this.todoService.getTodoList();
  }

  addToDo(){
    console.log("Clicked on add to do");
  }

  deleteTodo(id:number){
    console.log("Deleting to do for id " + id);
    this.todoService.deleteTodo(id);
    this.todoList = this.todoService.getTodoList();
  }

  addTask(){
    this.todoService.addTodo(this.taskForm.get("taskDetails")?.value);
    this.todoList = this.todoService.getTodoList();
  }

}
