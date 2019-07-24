import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirchCylinderComponent } from './birch-cylinder.component';

describe('BirchCylinderComponent', () => {
  let component: BirchCylinderComponent;
  let fixture: ComponentFixture<BirchCylinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirchCylinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirchCylinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
