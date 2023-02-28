import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsReactiveComponent } from './flights-reactive.component';

describe('FlightsReactiveComponent', () => {
  let component: FlightsReactiveComponent;
  let fixture: ComponentFixture<FlightsReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
