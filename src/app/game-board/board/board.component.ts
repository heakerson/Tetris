import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameBoardState } from '../store/game-board.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
