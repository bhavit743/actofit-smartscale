import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartscaleComponent } from './smartscale.component';

describe('SmartscaleComponent', () => {
  let component: SmartscaleComponent;
  let fixture: ComponentFixture<SmartscaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartscaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
