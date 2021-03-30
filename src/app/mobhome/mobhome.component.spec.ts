import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobhomeComponent } from './mobhome.component';

describe('MobhomeComponent', () => {
  let component: MobhomeComponent;
  let fixture: ComponentFixture<MobhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
