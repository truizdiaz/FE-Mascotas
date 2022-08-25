import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMascotaComponent } from './ver-mascota.component';

describe('VerMascotaComponent', () => {
  let component: VerMascotaComponent;
  let fixture: ComponentFixture<VerMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMascotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
