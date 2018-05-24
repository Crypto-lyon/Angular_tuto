import {Component, OnInit} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  /* OnInit impose d'implem ngOnInit,
      Angular a un cycle de vie.
   * Quand on instancie notre classe:
    * 1 on injecte les deps.
    * 2 on recupere des inputs
    * 3 on affiche les resultats.*/

  public todos: Todo[];

  constructor() {
  }

  ngOnInit() {
    /* Ici on fait l'instanciation des variables.*/
    this.todos = [
      new Todo('Fabriquer une clé'),
      new Todo('Vider le lac')
    ];
  }

}
