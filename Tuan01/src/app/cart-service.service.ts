import { Injectable } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items = [];
  dem=0;
  addToCart(product) { 
    if(this.items.length>0){    
      for(var i=0;i<this.items.length;i++){
          if(this.items[i].productId ==product.productId){
            this.dem++;
            this.items[i].quantity++; 
          }
      }
      if(this.dem==0){
        this.items.push(product);
      }else{       
        this.dem=0;     
      }
    }else{     
    this.items.push(product);
    }
  }
  getItems() {
    return this.items;
  }
  clearCart() {
  this.items = [];
  return this.items;
  }  
  removeItem(id){
    for(var i=0;i<this.items.length;i++){
      if(this.items[i].productId==id){
        return this.items.splice(i,1);
      }
     }
   
  }
  constructor( private cartServiceService :CartServiceService) { }
 
}
