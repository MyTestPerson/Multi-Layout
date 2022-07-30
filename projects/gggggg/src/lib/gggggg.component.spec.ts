import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgggggComponent } from './gggggg.component';

describe('GgggggComponent', () => {
  let component: GgggggComponent;
  let fixture: ComponentFixture<GgggggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgggggComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgggggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
