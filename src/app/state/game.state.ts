import { GameStateType } from '../models/game-state-type.model';

export interface GameState {
    currentState: GameStateType
    randomProperty: string
}