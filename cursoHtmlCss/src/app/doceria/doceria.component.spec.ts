import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoceriaComponent } from './doceria.component';

describe('DoceriaComponent', () => {
  let component: DoceriaComponent;
  let fixture: ComponentFixture<DoceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoceriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
