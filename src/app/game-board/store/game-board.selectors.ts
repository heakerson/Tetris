import { GameState } from 'src/app/store/game.state';
import { GameBoardState } from './game-board.state';
import { createSelector } from '@ngrx/store';

export const selectFeature = state => state.gameBoardState as GameBoardState;

export const selectCurrentScore = createSelector(
    selectFeature,
    (state: GameBoardState) => state.score
);

export const selectGridBlock = createSelector(
    selectFeature,
    (state: GameBoardState, props) => state.grid[props.row][props.column]
);