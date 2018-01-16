import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvwComponent } from './rvw.component';

describe('RvwComponent', () => {
  let component: RvwComponent;
  let fixture: ComponentFixture<RvwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
