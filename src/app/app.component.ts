import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Tic Tac Toe';

  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {

  }

  logout(): void {
  }

  ngOnInit() {
    this.authService.authEmitter.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }
}
