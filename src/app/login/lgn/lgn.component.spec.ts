import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgnComponent } from './lgn.component';

describe('LgnComponent', () => {
  let component: LgnComponent;
  let fixture: ComponentFixture<LgnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
