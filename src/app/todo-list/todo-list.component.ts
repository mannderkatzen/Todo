import { Component, OnInit } from '@angular/core';
import { TodoService } from'../todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private tser:TodoService) { }
  todo_list
  ngOnInit(): void {
    this.todo_list=this.tser.todo_list
  }
  display=true
 
}
