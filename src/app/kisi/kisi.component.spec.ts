import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KisiComponent } from './kisi.component';

describe('KisiComponent', () => {
  let component: KisiComponent;
  let fixture: ComponentFixture<KisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KisiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
