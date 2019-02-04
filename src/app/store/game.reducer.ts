import { GameState } from './game.state';
import { GameStateType } from '../models/game-state-type.model';
import { GameStateActionsUnion, GameStateActionTypes } from './game.actions';

export const initialGameState: GameState = {
    currentState: GameStateType.Reset,
    count: 0,
    countRate: 1000
}

export function GameStateReducer(state = initialGameState, action: GameStateActionsUnion): GameState {
    // console.log('reducing action:' + action.type);

    switch(action.type){

        case GameStateActionTypes.Start:
            return {
                ...state,
                currentState: GameStateType.Start
            }

        case GameStateActionTypes.Playing:
            return {
                ...state,
                currentState: GameStateType.Playing
            }

        case GameStateActionTypes.Reset:
            return {
                ...state,
                currentState: GameStateType.Reset,
                count: 0,
                countRate: 1000
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

        case GameStateActionTypes.IncrementCounter:
            return {
                ...state,
                count: state.count+=1
            };

        case GameStateActionTypes.IncreaseCountSpeed: 
            return {
                ...state,
                countRate: state.countRate*.8
            };

        default: {
            return state;
        }
    }
}