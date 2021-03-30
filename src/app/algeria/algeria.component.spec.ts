import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgeriaComponent } from './algeria.component';

describe('AlgeriaComponent', () => {
  let component: AlgeriaComponent;
  let fixture: ComponentFixture<AlgeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
