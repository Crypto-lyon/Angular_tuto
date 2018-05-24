import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Todo} from "../todo";

@Component({
  // changeDetectionStrategy : Le component se mettra à jour, uniquement lorsqu'un objet immutable passera dans l'input.
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  // On crée un input pour pouvoir boucler dans le template de todo-list.component.ts
  @Input() item: Todo;
  constructor() { }

  ngOnInit() {

  }

}
