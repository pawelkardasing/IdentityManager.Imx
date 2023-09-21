import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSupportWindowComponent } from './popup-support-window.component';

describe('PopupSupportWindowComponent', () => {
  let component: PopupSupportWindowComponent;
  let fixture: ComponentFixture<PopupSupportWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSupportWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSupportWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
