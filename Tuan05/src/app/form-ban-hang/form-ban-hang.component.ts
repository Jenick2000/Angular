import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-ban-hang',
  templateUrl: './form-ban-hang.component.html',
  styleUrls: ['./form-ban-hang.component.css']
})
export class FormBanHangComponent implements OnInit {

  items=[
    {name:'Nước ngọt',price:10,checked:false,soluong:0,thanhtien:0},
    {name:'Cà phê đen',price:12,checked:false,soluong:0,thanhtien:0},
    {name:'thuốc lá',price:8,checked:false,soluong:0,thanhtien:0}
  ];
  
  constructor() { }

  ngOnInit() {
   
   
  }
   //Ham tinh thanh tien 
  thanhtien(){
    for(let item of this.items){
      if(item.checked==true && item.soluong >=0)
        item.thanhtien=item.price * item.soluong;     
    }
  }
  // ham tinh tong tien
  total(){
    let t=0;
    for(let item of this.items){
      if(item.checked==true && item.soluong >=0)
        t+=item.thanhtien;     
    }
    return t;
  }
}
