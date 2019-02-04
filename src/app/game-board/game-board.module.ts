import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { GridComponent } from './board/grid/grid.component';
import { DisplayPanelComponent } from './board/display-panel/display-panel.component';
import { BlockComponent } from './board/grid/block/block.component';
import { StoreModule } from '@ngrx/store';
import { GameBoardReducer } from './store/game-board.reducer';
import { ScoreKeeperComponent } from './board/display-panel/score-keeper/score-keeper.component';
import { LevelDisplayComponent } from './board/display-panel/level-display/level-display.component';
import { NextShapeDisplayComponent } from './board/display-panel/next-shape-display/next-shape-display.component';
import { LinesDisplayComponent } from './board/display-panel/lines-display/lines-display.component';

@NgModule({
  declarations: [BoardComponent, GridComponent, DisplayPanelComponent, BlockComponent, ScoreKeeperComponent, LevelDisplayComponent, NextShapeDisplayComponent, LinesDisplayComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('gameBoardState', GameBoardReducer)
  ],
  exports: [
    BoardComponent
  ]
})
export class GameBoardModule { }
