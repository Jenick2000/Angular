import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import{RouterModule}from '@angular/router';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailProductComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      { path: '', 	component: HomeComponent }, 
      {path: 'detail/:productId', component:DetailProductComponent},
      {path: 'cart', component:CartComponent},    
      { path: '**', redirectTo: 'products', pathMatch: 'full' },
     
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
