import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todoService';
import { Todo } from '../model/Todo';
import { HttpClient, HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todo: Todo; todos : Todo[]; editTodo: Todo;

  constructor(private todoService : TodoService,
    private http: HttpClient,
    ) { }


  ngOnInit() {
    
  }


  getTodoList(){

    return this.todoService.todoList()
      .subscribe((response) => {
        this.todos = response;
      },
      error => console.error(error)
      );
  }

 

  delete(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
    this.todoService.deleteTodo(todo.subject).subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.heroesService.deleteHero(hero.id);
    */
  }

  edit(todo) {
    this.editTodo = todo;
  }
  
/* optional
  search(searchTerm: string) {
    this.editTodo = undefined;
    if (searchTerm) {
      this.todoService.searchTodos(searchTerm)
        .subscribe(todos => this.todos = todos);
    }
  }
*/
}
