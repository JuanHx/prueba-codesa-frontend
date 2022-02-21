import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRegistrosComponent } from './agregar-registros.component';

describe('AgregarRegistrosComponent', () => {
  let component: AgregarRegistrosComponent;
  let fixture: ComponentFixture<AgregarRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRegistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
