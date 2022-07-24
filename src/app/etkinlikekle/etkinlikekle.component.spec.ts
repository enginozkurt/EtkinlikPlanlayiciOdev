import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtkinlikekleComponent } from './etkinlikekle.component';

describe('EtkinlikekleComponent', () => {
  let component: EtkinlikekleComponent;
  let fixture: ComponentFixture<EtkinlikekleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtkinlikekleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtkinlikekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
