import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramWebComponent } from './instagram-web.component';

describe('InstagramWebComponent', () => {
  let component: InstagramWebComponent;
  let fixture: ComponentFixture<InstagramWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstagramWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
