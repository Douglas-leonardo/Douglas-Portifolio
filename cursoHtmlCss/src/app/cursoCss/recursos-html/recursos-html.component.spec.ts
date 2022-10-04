import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosHtmlComponent } from './recursos-html.component';

describe('RecursosHtmlComponent', () => {
  let component: RecursosHtmlComponent;
  let fixture: ComponentFixture<RecursosHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
