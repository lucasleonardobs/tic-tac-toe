import { Component, OnInit } from '@angular/core';
import Minimax from 'tic-tac-toe-minimax';

const { GameStep } = Minimax

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

  public toggleGame(toggle: boolean): void {
    if (toggle === this.playing) {
      return;
    }

    this.gameState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.winner = undefined;

    if (toggle && this.computerFirst) {
      this.makeComputerMove();
    }

    this.playing = toggle;
  }

  public makeHumanMove(field: number): void {
    if (!this.playing || Number.isInteger(this.gameState[field])) {
      return;
    }

    this.gameState[field] = 'X';
    this.makeComputerMove();
  }

  public makeComputerMove(): void {

  }

  ngOnInit(): void {
  }

}
