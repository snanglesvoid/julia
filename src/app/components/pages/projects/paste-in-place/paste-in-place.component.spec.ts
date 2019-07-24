import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteInPlaceComponent } from './paste-in-place.component';

describe('PasteInPlaceComponent', () => {
  let component: PasteInPlaceComponent;
  let fixture: ComponentFixture<PasteInPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteInPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteInPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
