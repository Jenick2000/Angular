import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items = [];
  addToCart(product) {
    this.items.push(product);
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
      if(this.items[i].productId===id)
      this.items= this.items.slice(i);
      return this.items;
     }
   
  }
  constructor( private cartServiceService :CartServiceService) { }
 
}
