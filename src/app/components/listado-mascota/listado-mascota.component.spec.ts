import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMascotaComponent } from './listado-mascota.component';

describe('ListadoMascotaComponent', () => {
  let component: ListadoMascotaComponent;
  let fixture: ComponentFixture<ListadoMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
