import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBanHangComponent } from './form-ban-hang.component';

describe('FormBanHangComponent', () => {
  let component: FormBanHangComponent;
  let fixture: ComponentFixture<FormBanHangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBanHangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBanHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
