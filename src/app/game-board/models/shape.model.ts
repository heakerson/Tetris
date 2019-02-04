import { ShapeType } from './shape-type.model';
import { Block } from './block.model';
import { Color } from './block-color-type.model';

export class Shape {
    shapeType: ShapeType;
    color: Color;
    blocks: Block[];
}