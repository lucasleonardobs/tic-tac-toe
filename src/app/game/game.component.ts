import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  public gameState: Array<number | string> = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  public makeHumanMove(field: number): void {

  }

  ngOnInit(): void {
  }

}
