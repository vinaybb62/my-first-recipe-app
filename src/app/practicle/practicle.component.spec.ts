import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticleComponent } from './practicle.component';

describe('PracticleComponent', () => {
  let component: PracticleComponent;
  let fixture: ComponentFixture<PracticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
