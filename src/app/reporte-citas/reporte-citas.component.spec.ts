import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCitasComponent } from './reporte-citas.component';

describe('ReporteCitasComponent', () => {
  let component: ReporteCitasComponent;
  let fixture: ComponentFixture<ReporteCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
