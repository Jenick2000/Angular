import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ManagementUserComponent } from './management-user/management-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    DetailProductComponent,
    ManagementUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
