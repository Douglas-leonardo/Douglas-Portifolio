import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeBuscaComponent } from './pagina-de-busca.component';

describe('PaginaDeBuscaComponent', () => {
  let component: PaginaDeBuscaComponent;
  let fixture: ComponentFixture<PaginaDeBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaDeBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDeBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
