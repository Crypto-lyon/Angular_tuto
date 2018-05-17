/* Cette classe est un modele de données, ici un Todo, qu'on décrit par une classe JS.
*  On a un module par modèle.*/
export class Todo {
  /* classe crée par npm run ng g class todo/todo*/
  public action: string; /* action est le truc qu'on doit faire dans notre todo.*/
  public checked: boolean;

  constructor(action: string) {
    this.action = action;
  }
}
