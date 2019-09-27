import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { CartComponent } from './cart/cart.component';
import{RouterModule} from'@angular/router';//inport de chay router

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    DetailProductComponent,
    ManagementUserComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ 
      { path: '', 	component: ListProductComponent }, 
      {path: 'cart', component: CartComponent},
      { path: 'products/:productId', component: DetailProductComponent },//:productId lay id san pham
      { path: '**', redirectTo: '', pathMatch: 'full' },
     
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
