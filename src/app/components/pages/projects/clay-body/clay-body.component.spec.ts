import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClayBodyComponent } from './clay-body.component';

describe('ClayBodyComponent', () => {
  let component: ClayBodyComponent;
  let fixture: ComponentFixture<ClayBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClayBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClayBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
