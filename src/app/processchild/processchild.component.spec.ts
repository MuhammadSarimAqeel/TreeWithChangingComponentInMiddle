import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesschildComponent } from './processchild.component';

describe('ProcesschildComponent', () => {
  let component: ProcesschildComponent;
  let fixture: ComponentFixture<ProcesschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
