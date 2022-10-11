import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBox2Component } from './flex-box2.component';

describe('FlexBox2Component', () => {
  let component: FlexBox2Component;
  let fixture: ComponentFixture<FlexBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexBox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
