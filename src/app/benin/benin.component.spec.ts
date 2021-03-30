import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeninComponent } from './benin.component';

describe('BeninComponent', () => {
  let component: BeninComponent;
  let fixture: ComponentFixture<BeninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
