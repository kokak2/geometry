import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShviloComponent } from './shvilo.component';

describe('ShviloComponent', () => {
  let component: ShviloComponent;
  let fixture: ComponentFixture<ShviloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShviloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShviloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
