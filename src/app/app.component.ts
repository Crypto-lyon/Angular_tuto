import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /* la balise concernée*/
  templateUrl: './app.component.html',  /* le template */
  styleUrls: ['./app.component.css']  /* le css associé*/
})
export class AppComponent {
  public title: string;  /* Les attributs publics sont acessibles dans le html. */
  public id: number;
  /* On génère un nouveau module avec npm run ng g module todo*/

  constructor() {
    // /* Executé lorsque le component apparait sur la page */
    // this.title = 'Bonjour';
    // this.id = 0;
    // setInterval( () => { /* Arrow function : le this refere à la classe AppComponent, et non pas l'objet setInterval.*/
    //   this.id ++;
    // }, 1000);

  }
}
