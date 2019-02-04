import { Component, OnInit } from '@angular/core';
import { GameBoardState } from '../../store/game-board.state';
import { Store } from '@ngrx/store';
import { Start } from 'src/app/store/game.actions';

@Component({
  selector: 'app-display-panel',
  templateUrl: './display-panel.component.html',
  styleUrls: ['./display-panel.component.scss']
})
export class DisplayPanelComponent implements OnInit {

  constructor(private gameState: Store<{gameBoardState: GameBoardState}>) { }

  ngOnInit() {
  }

  start(){
    this.gameState.dispatch(new Start());
  }
}
