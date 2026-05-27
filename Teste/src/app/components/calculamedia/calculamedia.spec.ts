import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculamedia } from './calculamedia';

describe('Calculamedia', () => {
  let component: Calculamedia;
  let fixture: ComponentFixture<Calculamedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculamedia],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculamedia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
