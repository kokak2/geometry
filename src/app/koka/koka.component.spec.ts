import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KokaComponent } from './koka.component';

describe('KokaComponent', () => {
  let component: KokaComponent;
  let fixture: ComponentFixture<KokaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KokaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KokaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
