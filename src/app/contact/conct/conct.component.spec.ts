import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConctComponent } from './conct.component';

describe('ConctComponent', () => {
  let component: ConctComponent;
  let fixture: ComponentFixture<ConctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
