import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccs3TopComponent } from './ccs3-top.component';

describe('Ccs3TopComponent', () => {
  let component: Ccs3TopComponent;
  let fixture: ComponentFixture<Ccs3TopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ccs3TopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ccs3TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
