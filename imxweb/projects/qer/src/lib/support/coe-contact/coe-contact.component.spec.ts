import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeContactComponent } from './coe-contact.component';

describe('CoeContactComponent', () => {
  let component: CoeContactComponent;
  let fixture: ComponentFixture<CoeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoeContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
