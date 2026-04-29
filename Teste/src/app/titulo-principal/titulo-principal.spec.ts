import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPrincipal } from './titulo-principal';

describe('TituloPrincipal', () => {
  let component: TituloPrincipal;
  let fixture: ComponentFixture<TituloPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloPrincipal],
    }).compileComponents();

    fixture = TestBed.createComponent(TituloPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
