import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, interval, Subscription } from 'rxjs';
import { Start, Reset, IncrementCounter, IncreaseCountSpeed, Pause } from './store/game.actions';
import { GameState } from './store/game.state';
import { GameStateType } from './models/game-state-type.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  rate$: Observable<number>;
  currentState$: Observable<GameStateType>;
  currentCount$: Observable<number>;
  currentRate: number;
  counterSubscription: Subscription;

  constructor(private store: Store<{gameState: GameState}>) {

  }

  ngOnInit(): void {
    this.currentState$ = this.store.pipe(select(state => state.gameState.currentState));
    this.rate$ = this.store.pipe(select(state => state.gameState.countRate));
    this.currentCount$ = this.store.pipe(select(state => state.gameState.count));


    this.rate$.subscribe(rate => this.currentRate = rate);

    this.currentState$.subscribe(
      state => {
        switch(state){
          case GameStateType.Playing: {
            this.playing();
            break;
          }
          case GameStateType.Reset: {
            this.reset();
            break;
          }
          case GameStateType.Lose:
          case GameStateType.Win:
          case GameStateType.Paused: {
            this.pause();
            break;
          }
        }
      }
    );
  }

  updateState(state: string) {
    switch(state){

      case 'pause': {
        this.store.dispatch(new Pause());
        break;
      }

      case 'start': {
        this.store.dispatch(new Start());
        break;
      }

      case 'reset': {
        this.store.dispatch(new Reset());
        break;
      }
    }
  }

  playing(){
    this.counterSubscription = interval(this.currentRate).subscribe(count => {    
      this.store.dispatch(new IncrementCounter());
    });
  }

  pause() {
    this.store.dispatch(new Pause());
    this.counterSubscription.unsubscribe();
  }

  increaseRate(){
    this.counterSubscription.unsubscribe();
    this.store.dispatch(new IncreaseCountSpeed());
    this.playing();
  }

  reset(){
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
    this.store.dispatch(new Reset());
  }
}
