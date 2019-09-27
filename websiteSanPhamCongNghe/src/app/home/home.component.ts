import { Component, OnInit } from '@angular/core';
import{CartServiceService}from '../cart-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ChungLoai=[
  {name:"Điện thoại di động", id:1},
  {name:"Máy tính xách tay", id:2},
  {name:"Máy tính để bàn", id:3},
  {name:"Quạt máy", id:4},
  {name:"Tivi", id:5}
];
LoaiSanPham=[
  {id_cl:1,name:"nokia",id:101,price:15.2,promotion:0,quanlity:5,supplier:"Samsung",img:"oppojpg.jpg"},
  {id_cl:1,name:"Node 7",id:102,price:18.2,promotion:5,quanlity:105,supplier:"Redmi" ,img:"nodemi.jpg"},
  {id_cl:1,name:"Iphone",id:103,price:20.9,promotion:0,quanlity:15,supplier:"Apple",img:"iphanex.jpg"},
  {id_cl:1,name:"vivo",id:104,price:17.2,promotion:0,quanlity:5,supplier:"China",img:"vivo.jpg"},
  {id_cl:1,name:"Huawei i3",id:105,price:15.2,promotion:0,quanlity:5,supplier:"Huawei",img:"dongho.jpg"},
  {id_cl:2,name:"laptop Dell",id:106,price:17.2,promotion:0,quanlity:5,supplier:"China",img:"laptopDell.jpg"},
  {id_cl:2,name:"Huawei i3",id:107,price:15.2,promotion:0,quanlity:5,supplier:"Huawei",img:"asus.jpg"},
  {id_cl:2,name:"innovo v.10",id:1017,price:17.2,promotion:0,quanlity:5,supplier:"Korean",img:"laptop3.jpg"},
  {id_cl:3,name:"Dell",id:108,price:20.9,promotion:8,quanlity:15,supplier:"IBM",img:"desktop1.jpg"},
  {id_cl:3,name:"Asus",id:109,price:17.2,promotion:0,quanlity:5,supplier:"Microsoft",img:"desktop2.jpg"},
  {id_cl:3,name:"Macbook",id:1010,price:15.2,promotion:3,quanlity:5,supplier:"apple",img:"case.jpg"},
  {id_cl:4,name:"Quat ban",id:1011,price:20.9,promotion:8,quanlity:15,supplier:"Asanzzo",img:"quat1.jpg"},
  {id_cl:4,name:"Quat ko mat",id:1012,price:17.2,promotion:0,quanlity:5,supplier:"KeNo",img:"quat2.jpg"},
  {id_cl:4,name:"Quat cho zui",id:1013,price:15.2,promotion:3,quanlity:5,supplier:"apple",img:"quat3.jpg"},
  {id_cl:5,name:"Sony",id:1014,price:20.9,promotion:8,quanlity:15,supplier:"SOny company",img:"tivi1.jpg"},
  {id_cl:5,name:"Samsung",id:1015,price:17.2,promotion:0,quanlity:5,supplier:"Samgsung.c",img:"tivi2.jpg"},
  {id_cl:5,name:"LG 5.6",id:1016,price:15.2,promotion:3,quanlity:5,supplier:"LG Group",img:"tivi3.jpg"}

];
loaisanpham_2=[];
AddToCart:any;

  constructor( private cart :CartServiceService) { }
  
  chungloai(id){
    this.loaisanpham_2=[];
    for(let p of this.LoaiSanPham){
      if(p.id_cl==id)
      this.loaisanpham_2.push(p);
      }
    }
    soluongCart=0;
    totalCart=0;
  ngOnInit() {
  
   for(var i=0;i<this.LoaiSanPham.length;i++){
    this.loaisanpham_2.push(this.LoaiSanPham[i]);
   }
    // xem tong quat cart
         this.soluongCart=this.cart.items.length;   
         this.totalCart=this.cart.total();
   
   
  }
   //add to cart
  addtocart(id){
          
      this.AddToCart=this.LoaiSanPham.find(p=>p.id==id);
      alert("Đã thêm "+this.AddToCart.name +" sản phẩm vào giỏ hàng... "); 
      let copy = Object.assign(this.AddToCart,{soluong:1});
      this.cart.addToCart(copy);
      this.soluongCart=this.cart.items.length;   
      this.totalCart=this.cart.total();
  }

}
