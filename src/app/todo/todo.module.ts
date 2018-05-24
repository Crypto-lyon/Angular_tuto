import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* on cree notre component avec npm run ng g component todo/todo-list */
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoViewComponent } from './todo-view/todo-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  // On declare les components.
  declarations: [TodoListComponent, TodoViewComponent],
  // On rend ces components disponibles aux autres modules (ici on le rend dispo pour appModule.
  exports: [TodoListComponent]
})
export class TodoModule { }
