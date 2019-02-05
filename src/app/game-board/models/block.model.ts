import { Color } from './block-color-type.model';

export class Block {
    color: Color = Color.None;
    isPlacedShape: boolean = false;
    isCurrentShape: boolean = false;
    row: number;
    column: number;
    leftBlock: Block;
    rightBlock: Block;
    bottomBlock: Block;
    topBlock: Block;
}
