import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import {LuongValidator,AgeValidator } from "../customValidation/LuongValidator.validator";


@Component({
  selector: 'app-form-tinh-luong',
  templateUrl: './form-tinh-luong.component.html',
  styleUrls: ['./form-tinh-luong.component.css']
})
export class FormTinhLuongComponent implements OnInit {
  NV={
 
    money:null,
    gender:null,
    age:null,
    rate:null
  }
  nhom=[
    {age:'duoi 18',rate:0.07},
    {age:'tu 25 den 40',rate:0.1},
    {age:'tren 40',rate:0.3}
  ]
  statusName:boolean=false;

  constructor( public  fb :FormBuilder) { }
  validatorForm = this.fb.group({
    name: ['', [Validators.required,AgeValidator]], //Custom validator is passed here.
    luong: ['', [Validators.required,LuongValidator]]
    
  })
  // Getter method to access form controls
  get name() {
    return this.validatorForm.get('name');
  }
  get luong(){
    return this.validatorForm.get('luong');
  }
  ngOnInit() {
    
  }
  onSubmit(){
    alert("<h3> ok</h3>");
  }
  total(){
    let t;
    if(this.NV.gender=='Nu')
    t=(this.luong.value * this.NV.rate)+200000;
    else
    t=this.luong.value * this.NV.rate;

    return t;
  }
  
}
