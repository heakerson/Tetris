import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from 'src/app/game-board/models/block.model';
import { Store, select } from '@ngrx/store';
import { GameBoardState } from 'src/app/game-board/store/game-board.state';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  @Input()
  row: number;

  @Input()
  column: number;

  model$: Observable<Block>;

  constructor(private store: Store<{gameBoardState: GameBoardState}>) { }

  ngOnInit() {
    this.model$ = this.store.pipe(select(state => state.gameBoardState.grid[this.row][this.column]));
  }

}
