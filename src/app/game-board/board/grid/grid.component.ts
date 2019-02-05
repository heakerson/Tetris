import { Component, OnInit, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameBoardState } from '../../store/game-board.state';
import { InitializeGridBlocks, ShiftShapeDown, PlaceCurrentShape,
  SetCurrentShape, SetNextShape, ShiftShapeRight, ShiftShapeLeft, RotateShape } from '../../store/game-board.actions';
import { Block } from '../../models/block.model';
import { ShapeType } from '../../models/shape-type.model';
import { GameState } from 'src/app/store/game.state';
import { GameStateType } from 'src/app/models/game-state-type.model';
import { Playing } from 'src/app/store/game.actions';
import { Shape } from '../../models/shape.model';
import { Color } from '../../models/block-color-type.model';
import { KeyCode } from '../../models/key-code.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  widthCounter: number[] = [];
  heightCounter: number[] = [];
  currentGameState: GameStateType;
  currentShape: Shape;

  constructor(private store: Store<{gameBoardState: GameBoardState; gameState: GameState}>) { }

  ngOnInit() {
    this.initializeGridBlocks();

    this.store.select((state) => state.gameBoardState).subscribe(
      state => {
        this.widthCounter = state.boardWidthCounter;
        this.heightCounter = state.boardHeightCounter;
      }
    );
    this.store.select(state => state.gameState.count).subscribe(ticker => this.tick());
    this.store.select(state => state.gameBoardState.currentShape).subscribe(shape => this.currentShape = shape);
    this.store.select(state => state.gameState.currentState).subscribe(gameState => {
      this.currentGameState = gameState;

      switch (gameState) {
        case GameStateType.Start:
          this.store.dispatch(new SetCurrentShape(this.generateRandomShape()));
          this.store.dispatch(new SetNextShape(this.generateRandomShape()));
          this.store.dispatch(new PlaceCurrentShape(this.generateNewShapeLocation()));
          this.store.dispatch(new Playing());
          break;
      }
    });
  }

  tick() {
    console.log('down');
    this.store.dispatch(new ShiftShapeDown());
  }

  shiftLeft() {
    console.log('left');
    this.store.dispatch(new ShiftShapeLeft());
  }

  shiftRight() {
    console.log('right');
    this.store.dispatch(new ShiftShapeRight());
  }

  shiftDown() {
    console.log('down');
    this.store.dispatch(new ShiftShapeDown());
  }

  rotate() {
    console.log('rotate');
    this.store.dispatch(new RotateShape());
  }

  generateNewShapeLocation(): Block[] {
    const blocks: Block[] = [];

    switch (this.currentShape.shapeType) {
      case ShapeType.I:
      case ShapeType.J:
      case ShapeType.L:
      case ShapeType.O:
      case ShapeType.S:
      case ShapeType.T:
      case ShapeType.Z:
    }

    return blocks;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (this.currentGameState === GameStateType.Playing) {
      if (event.keyCode === KeyCode.DOWN_ARROW) {
        this.shiftDown();
      } else if (event.keyCode === KeyCode.LEFT_ARROW) {
        this.shiftLeft();
      } else if (event.keyCode === KeyCode.RIGHT_ARROW) {
        this.shiftRight();
      } else if (event.keyCode === KeyCode.UP_ARROW) {
        this.rotate();
      }
    }
  }

  generateRandomShape(): Shape {
    const randomShapeType = Math.floor(Math.random() * Object.keys(ShapeType).length / 2);
    const randomShapeColor = Math.floor(Math.random() * Object.keys(Color).length / 2);
    const shape = new Shape();
    shape.shapeType = randomShapeType;
    shape.color = randomShapeColor;
    return shape;
  }

  initializeGridBlocks(): void {
    const grid = this.buildBlocks();
    this.getAdjacentBlocks(grid);

    this.store.dispatch(new InitializeGridBlocks(grid));
  }

  buildBlocks(): Block[][] {
    const grid: Block[][] = [];

    for (const rowCount of this.heightCounter) {
      const row: Block[] = [];

      for (const columnCount of this.widthCounter) {
        const block: Block = new Block();
        block.row = rowCount;
        block.column = columnCount;
        row.push(block);
      }
      grid.push(row);
    }

    return grid;
  }

  getAdjacentBlocks(grid: Block[][]): void {
    for (const rowCount of this.heightCounter) {
      for (const columnCount of this.widthCounter) {
        const block = grid[rowCount][columnCount];

        // above
        if (this.validBlock(rowCount - 1, columnCount)) {
          block.topBlock = grid[rowCount][columnCount];
        }
        // left
        if (this.validBlock(rowCount, columnCount - 1)) {
          block.leftBlock = grid[rowCount][columnCount];
        }
        // right
        if (this.validBlock(rowCount, columnCount + 1)) {
          block.rightBlock = grid[rowCount][columnCount];
        }
        // below
        if (this.validBlock(rowCount + 1, columnCount)) {
          block.bottomBlock = grid[rowCount][columnCount];
        }
      }
    }
  }

  validBlock(row: number, column: number): boolean {
    if (row >= 0 && row < this.heightCounter.length) {
      if (column >= 0 && column < this.widthCounter.length) {
        return true;
      }
    }
    return false;
  }

}
