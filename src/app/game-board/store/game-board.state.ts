import { ShapeType } from '../models/shape-type.model';
import { Block } from '../models/block.model';
import { Shape } from '../models/shape.model';

export interface GameBoardState {
    currentShape: Shape;
    nextShape: Shape;
    boardWidthCounter: number[];
    boardHeightCounter: number[];
    levels: number;
    score: number;
    lines: number;
    grid: Block[][];
}
