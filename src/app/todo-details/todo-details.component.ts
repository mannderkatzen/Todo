import { Component, OnInit } from '@angular/core';
import { TodoService } from'../todo.service';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor(private tser:TodoService) { }
  todo_list
  ngOnInit(): void {
    this.todo_list=this.tser.todo_list
  }
}
