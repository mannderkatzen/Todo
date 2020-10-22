import { Component, OnInit } from '@angular/core';
import { TodoService } from'../todo.service';
@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  todo_list
  constructor(private tser:TodoService) { }

  ngOnInit(): void {
    this.todo_list=this.tser.todo_list
  }
  del_id
  val;
  date;
  desc;
 

  add()
  {
    var temp={title:this.val,date:this.date,desc:this.desc}
    this.todo_list.push(temp)
   
  }
  delete()
  {
    if(this.del_id>0&&this.del_id<=this.todo_list.length)
    {
      this.todo_list.splice(this.del_id-1,1)
    }
  }

}
