import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  public gameState: Array<number | string> = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  public winner: string | undefined;
  public playing: boolean = false;
  public computerFirst: boolean = false;
  public difficulty: 'Easy' | 'Normal' | 'Hard' = 'Normal';

  constructor() { }

  public makeHumanMove(field: number): void {

  }

  public toggleGame(toggle: boolean): void {

  }

  ngOnInit(): void {
  }

}
