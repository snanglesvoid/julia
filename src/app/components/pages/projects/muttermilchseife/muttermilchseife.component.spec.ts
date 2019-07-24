import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuttermilchseifeComponent } from './muttermilchseife.component';

describe('MuttermilchseifeComponent', () => {
  let component: MuttermilchseifeComponent;
  let fixture: ComponentFixture<MuttermilchseifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuttermilchseifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuttermilchseifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
