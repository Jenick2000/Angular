import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
   ListProduct=[
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "quantity": 1,
        "starRating": 3.2,
        "imageUrl": "giay.jpg"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "quantity": 1,
        "starRating": 4.2,
        "imageUrl": "giay2.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "quantity": 1,
        "starRating": 4.8,
        "imageUrl": "giay.jpg"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "quantity": 1,
        "starRating": 3.7,
        "imageUrl": "giay.jpg"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "quantity": 1,
        "starRating": 4.6,
        "imageUrl": "giay2.jpg"
    },
];
 isShow=true;
 text="Hidden image";
 
 showImg(){
   this.isShow=!this.isShow;
  if(this.isShow==false){
    this.text="Show image";
  }else{
    this.text="Hidden image";
  }

 }

 Tang(id){
  for(let i=0;i<this.ListProduct.length;i++){
      if(this.ListProduct[i].productId==id){
        this.ListProduct[i].quantity++;
      }
  }
 }
 Giam(id){
  for(let i=0;i<this.ListProduct.length;i++){
      if(this.ListProduct[i].productId==id){
        if(  this.ListProduct[i].quantity>0){
          this.ListProduct[i].quantity--;
        }
        
      }
  }
 }
 total(){
   let total=0;
   for(let i=0;i<this.ListProduct.length;i++){
     total+=this.ListProduct[i].price* this.ListProduct[i].quantity;
   }
   return total;
 }
  constructor() { }

  ngOnInit() {
  }

}
