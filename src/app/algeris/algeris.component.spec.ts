import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgerisComponent } from './algeris.component';

describe('AlgerisComponent', () => {
  let component: AlgerisComponent;
  let fixture: ComponentFixture<AlgerisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgerisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgerisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
