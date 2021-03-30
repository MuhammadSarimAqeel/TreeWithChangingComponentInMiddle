import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngolaComponent } from './angola.component';

describe('AngolaComponent', () => {
  let component: AngolaComponent;
  let fixture: ComponentFixture<AngolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
