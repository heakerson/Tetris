import { Action } from '@ngrx/store';

export enum GameStateActionTypes {
    Reset = '[GameState] Reset',
    Start = '[GameState] Start',
    Pause = '[GameState] Pause',
    Win = '[GameState] Win',
    Lose = '[GameState] Lose',
    UpdateRandomProperty = '[GameState] Update Random Property'
}

export class Start implements Action {
    readonly type = GameStateActionTypes.Start;
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

export class UpdateRandomProperty implements Action {
    readonly type = GameStateActionTypes.UpdateRandomProperty;

    constructor(public payload: string) {}
}

export type GameStateActionsUnion = Start | Reset | Pause | Win | Lose | UpdateRandomProperty;