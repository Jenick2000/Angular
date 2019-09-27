import { Component, OnInit } from '@angular/core';
import{CartServiceService}from '../cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items;
  constructor(private cart:CartServiceService) { }

  ngOnInit() {
    this.items=this.cart.items;
    console.log(this.items);
  }
  Tang(id){
    for(let i=0;i<this.items.length;i++){ 
      if(this.items[i].id==id){       
          this.items[i].soluong++;   
      }
  }
   
   }
   Giam(id){
    for(let i=0;i<this.items.length;i++){ 
        if(this.items[i].id==id){
          if(  this.items[i].soluong>0){
            this.items[i].soluong--;
          }
          
        }
    }
   }
   // tong tien trong cart
  total(){
    //const total = prices.reduce((a, b) => a + b));
     let total=0;
     for(let i=0;i<this.items.length;i++){ 
        total+=this.items[i].price* this.items[i].soluong;   
     }
     return total; 
     //Math.ceil(3.4)2
   }
   deleteItemCart(id){
     this.cart.removeItem(id);
   }
   
}
