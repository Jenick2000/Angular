import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from'@angular/router';
import{CartServiceService}from '../cart-service.service';
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})

export class DetailProductComponent implements OnInit {
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
  product:any;
  id;
  constructor(private route:ActivatedRoute,private cart:CartServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pramas=>{this.id=+pramas.get('productId')});
    this.product=this.ListProduct.find(p=>p.productId===this.id);
  }
  back(){
    window.history.back();
  }
  starRating(starRating){
    return starRating*15;
  }
  addtocart(){
    
    this.cart.addToCart(this.product) ;// cần cái này
    console.log(this.cart.items);
    console.log("do dai cua cart "+this.cart.items.length);
    const name =this.cart.items.map(data => data.productName); 
    const price =this.cart.items.map(data => data.price); 
    const image =this.cart.items.map(data => data.imageUrl); 
   var testObject={'name':name,"price":price,"image":image};
   localStorage.setItem('testObject', JSON.stringify(testObject));
   var retrievedObject = localStorage.getItem('testObject');
   var getItem=JSON.parse(retrievedObject);
    console.log('retrievedObject: ', getItem);
    console.log('retrievedObject item: ', getItem.name);
    alert("you added "+name+" product to cart ");
    
  }
}
