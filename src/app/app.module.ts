import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';   /* On importe le component dans le module */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]  /* On bootstrap appcomponent, cad quand on ouvre le le fichier, le component affiché est AppComponent*/
})
export class AppModule { }
