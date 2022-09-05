import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  list : any[] = [];
  inputRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    if (this.inputRef == ""){
      alert("Enter a task")
    }
    else{
    this.list.push(this.inputRef);
    this.inputRef = "";
  }
  


    console.log(this.list)

  }
  onDelete(index){
    this.list.splice(index,1);
  }

}
