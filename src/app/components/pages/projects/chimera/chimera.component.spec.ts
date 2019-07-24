import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimeraComponent } from './chimera.component';

describe('ChimeraComponent', () => {
  let component: ChimeraComponent;
  let fixture: ComponentFixture<ChimeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChimeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
