import { Component, OnInit } from '@angular/core';
import { GameBoardState } from 'src/app/game-board/store/game-board.state';
import { State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GameState } from 'src/app/store/game.state';


@Component({
  selector: 'app-score-keeper',
  templateUrl: './score-keeper.component.html',
  styleUrls: ['./score-keeper.component.scss']
})
export class ScoreKeeperComponent implements OnInit {

  score$: Observable<number>;
  gameBoardState$: Observable<GameBoardState>;
  counter$: Observable<number>;

  constructor(private boardState: State<{gameBoardState: GameBoardState}>, private gameState: State<{gameState: GameState}>) { }

  ngOnInit() {
    this.gameBoardState$ = this.boardState.pipe(select(state => state.gameBoardState as GameBoardState));
    this.score$ = this.gameBoardState$.pipe(select(state => state.score));
    this.counter$ = this.gameState.pipe(select(state => (state.gameState as GameState).count));
  }

}
