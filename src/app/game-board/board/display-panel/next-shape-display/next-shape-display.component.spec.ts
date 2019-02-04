import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextShapeDisplayComponent } from './next-shape-display.component';

describe('NextShapeDisplayComponent', () => {
  let component: NextShapeDisplayComponent;
  let fixture: ComponentFixture<NextShapeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextShapeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextShapeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
