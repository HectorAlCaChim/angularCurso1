import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteInsertarTablaComponent } from './estudiante-insertar-tabla.component';

describe('EstudianteInsertarTablaComponent', () => {
  let component: EstudianteInsertarTablaComponent;
  let fixture: ComponentFixture<EstudianteInsertarTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteInsertarTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteInsertarTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
