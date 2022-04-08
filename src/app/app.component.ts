import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tic-tac-toe';
  public isAuthenticated: boolean = false;

  logout(): void {

  }
}
