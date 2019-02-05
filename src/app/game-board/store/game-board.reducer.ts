import { GameBoardState } from './game-board.state';
import { GameBoardActionTypes, GameBoardActionUnion } from './game-board.actions';
import { ShapeType } from '../models/shape-type.model';


export const initialGameBoardState: GameBoardState = {
    currentShape: null,
    nextShape: null,
    boardWidthCounter: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    boardHeightCounter: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    levels: 1,
    lines: 0,
    score: 0,
    grid: []
};


export function GameBoardReducer(state = initialGameBoardState, action: GameBoardActionUnion): GameBoardState {

    switch (action.type) {

        case GameBoardActionTypes.SetCurrentShape:
            return {
                ...state,
                currentShape: state.nextShape
            };

        case GameBoardActionTypes.SetNextShape:
            return {
                ...state,
                nextShape: action.payload
            };

        case GameBoardActionTypes.InitializeGridBlocks:
            return {
                ...state,
                grid: action.payload
            };

        case GameBoardActionTypes.PlaceCurrentShape:

            const updatedCurrentShape = state.currentShape;
            updatedCurrentShape.blocks = action.payload;

            return {
                ...state,
                currentShape: updatedCurrentShape
            };

        case GameBoardActionTypes.UpdateBlock:

            const updatedGrid = state.grid;
            updatedGrid[action.payload.row][action.payload.column] = action.payload;

            return {
                ...state,
                grid: updatedGrid
            };

        default:
            return state;
    }
}
