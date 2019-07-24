import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinOfABirchComponent } from './skin-of-a-birch.component';

describe('SkinOfABirchComponent', () => {
  let component: SkinOfABirchComponent;
  let fixture: ComponentFixture<SkinOfABirchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinOfABirchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinOfABirchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
