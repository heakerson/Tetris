import { Action } from '@ngrx/store';

export enum GameStateActionTypes {
    Reset = '[GameState] Reset',
    Start = '[GameState] Start',
    Playing = '[GameState] Playing',
    Pause = '[GameState] Pause',
    Win = '[GameState] Win',
    Lose = '[GameState] Lose',
    IncrementCounter = '[GameState] Increment Counter',
    IncreaseCountSpeed = '[GameState] Increase count speed'
}

export class Start implements Action {
    readonly type = GameStateActionTypes.Start;
}

export class Playing implements Action {
    readonly type = GameStateActionTypes.Playing;
}

export class Reset implements Action {
    readonly type = GameStateActionTypes.Reset;
}

export class Pause implements Action {
    readonly type = GameStateActionTypes.Pause;
}

export class Win implements Action {
    readonly type = GameStateActionTypes.Win;
}

export class Lose implements Action {
    readonly type = GameStateActionTypes.Lose;
}

export class IncrementCounter implements Action {
    readonly type = GameStateActionTypes.IncrementCounter;
}

export class IncreaseCountSpeed implements Action {
    readonly type = GameStateActionTypes.IncreaseCountSpeed;
}

export type GameStateActionsUnion = Start | Reset | Pause | Win | Lose | IncrementCounter | IncreaseCountSpeed | Playing;