import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  @Input() item: Todo;
  constructor() { }

  ngOnInit() {

  }

}
