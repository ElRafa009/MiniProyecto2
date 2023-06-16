import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudaPreguntasComponent } from './ayuda-preguntas.component';

describe('AyudaPreguntasComponent', () => {
  let component: AyudaPreguntasComponent;
  let fixture: ComponentFixture<AyudaPreguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyudaPreguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyudaPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
