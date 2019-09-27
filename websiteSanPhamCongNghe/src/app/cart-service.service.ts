import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items = [];
  dem=0;

  addToCart(product) { 
    if(this.items.length>0){    
      for(var i=0;i<this.items.length;i++){
          if(this.items[i].id ==product.id){
            this.dem++;
            this.items[i].soluong++; 
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
  removeItem(id){
    for(var i=0;i<this.items.length;i++){
      if(this.items[i].id==id){
        return this.items.splice(i,1);
      }
     }
   
  }
  deleteAll(){
    return  this.items=[];
  }
  total(){
    let total=0;
     for(let i=0;i<this.items.length;i++){ 
        total+=this.items[i].price* this.items[i].soluong;   
     }
    
     let x = Math.round(total * 1000)/1000;;
     return x; 
  }
  constructor() { }
}
