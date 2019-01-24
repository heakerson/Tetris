import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextShapeGridComponent } from './next-shape-grid.component';

describe('NextShapeGridComponent', () => {
  let component: NextShapeGridComponent;
  let fixture: ComponentFixture<NextShapeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextShapeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextShapeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
