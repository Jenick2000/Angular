import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachHangHoaComponent } from './danhsach-hang-hoa.component';

describe('DanhsachHangHoaComponent', () => {
  let component: DanhsachHangHoaComponent;
  let fixture: ComponentFixture<DanhsachHangHoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachHangHoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachHangHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
