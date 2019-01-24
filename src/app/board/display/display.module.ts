import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { ScoreKeeperComponent } from './score-keeper/score-keeper.component';
import { NextShapeGridComponent } from './next-shape-grid/next-shape-grid.component';

@NgModule({
  declarations: [TimerComponent, ScoreKeeperComponent, NextShapeGridComponent],
  imports: [
    CommonModule
  ]
})
export class DisplayModule { }
