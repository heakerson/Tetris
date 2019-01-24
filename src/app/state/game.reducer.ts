import { GameState } from './game.state';
import { GameStateType } from '../models/game-state-type.model';
import { GameStateActionsUnion, GameStateActionTypes } from './game.actions';

export const initialGameState: GameState = {
    currentState: GameStateType.Reset,
    randomProperty: "Tetris!"
}

export function GameStateReducer(state = initialGameState, action: GameStateActionsUnion): GameState {
    switch(action.type){

        case GameStateActionTypes.Start:
            return {
                ...state,
                currentState: GameStateType.Started
            }

        case GameStateActionTypes.Reset:
            return {
                ...state,
                currentState: GameStateType.Reset
            }

        case GameStateActionTypes.Pause:
            return {
                ...state,
                currentState: GameStateType.Paused
            }

        case GameStateActionTypes.Win:
            return {
                ...state,
                currentState: GameStateType.Win
            }

        case GameStateActionTypes.Lose:
            return {
                ...state,
                currentState: GameStateType.Lose
            }

        case GameStateActionTypes.UpdateRandomProperty:
            return {
                ...state,
                randomProperty: action.payload
            }

        default: {
            return state;
        }
    }
}