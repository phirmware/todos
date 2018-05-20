import { Http } from "@angular/http";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todos: any[];
  newTodo: any;
  url:string = "http://localhost:3000/todos";
  constructor(public http: Http) {
    this.http.get(this.url).subscribe(response => {
    console.log(response.json()); 
    this.todos = response.json();
    });
  }

  ngOnInit() {}

  addTodo(todoInput: HTMLInputElement) {
    let inputTodo = { Name: todoInput.value };
    this.http
      .post(this.url, inputTodo)
      .subscribe(response => {
        this.newTodo = response.json();
        this.todos.push(this.newTodo);
        todoInput.value = "";
      });
  }

  deleteTodo(id,todo){
    this.http.delete(this.url + '/' + id).subscribe(response=>{
      let index = this.todos.indexOf(todo);
      this.todos.splice(index,1)
    })
  }
}

  