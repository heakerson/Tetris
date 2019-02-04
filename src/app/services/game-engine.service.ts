import { Injectable } from '@angular/core';
import { GameState } from '../store/game.state';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { GameStateType } from '../models/game-state-type.model';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {

  rate$: Observable<number>;
  currentState$: Observable<GameStateType>;
  currentCount$: Observable<number>;
  currentRate: number;
  counterSubscription: Subscription;

  constructor(private store: Store<{gameState: GameState}>) { 

  }
}
