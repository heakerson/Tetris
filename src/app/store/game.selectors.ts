import { GameState } from './game.state';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: GameState) => state;

export const selectCurrentRate = createSelector(
    selectFeature,
    (state: GameState) => state.countRate
);

export const selectCurrentCount = createSelector(
    selectFeature,
    (state: GameState) => state.count
)

export const selectCurrentGameState = createSelector(
    selectFeature,
    (state: GameState) => state.currentState
)