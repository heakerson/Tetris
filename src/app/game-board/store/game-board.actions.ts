import { Action } from '@ngrx/store';
import { ShapeType } from '../models/shape-type.model';
import { Block } from '../models/block.model';
import { Shape } from '../models/shape.model';

export enum GameBoardActionTypes {
    SetCurrentShape = '[Game Board] Set Current Shape',
    PlaceCurrentShape = '[Game Board] Place Current Shape',
    SetNextShape = '[Game Board] Set Next Shape',
    InitializeGridBlocks = '[Game Board] Initialize Grid Blocks',
    ShiftShapeDown = '[Game Board] Shift Shape Down',
    ShiftShapeLeft = '[Game Board] Shift Shape Left',
    ShiftShapeRight = '[Game Board] Shift Shape Right',
    RotateShape = '[Game Board] Shift Shape'
}

export class SetNextShape implements Action {
    readonly type = GameBoardActionTypes.SetNextShape;

    constructor(public payload: Shape) {}
}

export class SetCurrentShape implements Action {
    readonly type = GameBoardActionTypes.SetCurrentShape;

    constructor(public payload: Shape) {}
}

export class PlaceCurrentShape implements Action {
    readonly type = GameBoardActionTypes.PlaceCurrentShape;
}

export class InitializeGridBlocks implements Action {
    readonly type = GameBoardActionTypes.InitializeGridBlocks;

    constructor(public payload: Block[][]) {}
}

export class ShiftShapeDown implements Action {
    readonly type = GameBoardActionTypes.ShiftShapeDown;
}

export class ShiftShapeLeft implements Action {
    readonly type = GameBoardActionTypes.ShiftShapeLeft;
}

export class ShiftShapeRight implements Action {
    readonly type = GameBoardActionTypes.ShiftShapeRight;
}

export class RotateShape implements Action {
    readonly type = GameBoardActionTypes.RotateShape;
}

export type GameBoardActionUnion = SetNextShape | SetCurrentShape | InitializeGridBlocks | PlaceCurrentShape | ShiftShapeDown | ShiftShapeLeft | ShiftShapeRight | RotateShape;