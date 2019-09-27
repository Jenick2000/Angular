import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTinhLuongComponent } from './form-tinh-luong.component';

describe('FormTinhLuongComponent', () => {
  let component: FormTinhLuongComponent;
  let fixture: ComponentFixture<FormTinhLuongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTinhLuongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTinhLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
