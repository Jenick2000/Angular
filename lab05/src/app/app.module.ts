import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import{RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DanhsachHangHoaComponent } from './danhsach-hang-hoa/danhsach-hang-hoa.component';
import { DemoformComponent } from './demoform/demoform.component';
import { FormTinhLuongComponent } from './form-tinh-luong/form-tinh-luong.component';
import { FormBanHangComponent } from './form-ban-hang/form-ban-hang.component';


@NgModule({
  declarations: [
    AppComponent,
    DanhsachHangHoaComponent,
    DemoformComponent,
    FormTinhLuongComponent,
    FormBanHangComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forRoot([ 
      { path: '', 	component: FormBanHangComponent }, 
      {path: 'banhang',component:FormBanHangComponent},
      {path:'formvalidation',component:FormTinhLuongComponent},
      {path: 'home', component:DanhsachHangHoaComponent},
      {path:'demo',component:DemoformComponent},
      { path: '**', redirectTo: 'banhang', pathMatch: 'full' },
     
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
