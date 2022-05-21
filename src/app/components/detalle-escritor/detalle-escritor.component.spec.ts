import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEscritorComponent } from './detalle-escritor.component';

describe('DetalleEscritorComponent', () => {
  let component: DetalleEscritorComponent;
  let fixture: ComponentFixture<DetalleEscritorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEscritorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEscritorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
