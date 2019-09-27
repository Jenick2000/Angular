import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import {LuongValidator,AgeValidator } from "../customValidation/LuongValidator.validator";

@Component({
  selector: 'app-demoform',
  templateUrl: './demoform.component.html',
  styleUrls: ['./demoform.component.css']
})
export class DemoformComponent implements OnInit {


  constructor( public fb:FormBuilder) { }   
  
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
   
  onSubmit() {
    if(!this.validatorForm.valid) {
      alert('Please enter your age!')
      return false;
    } else {
      //alert(JSON.stringify(this.validatorForm.valid))
      // alert(this.validatorForm.value)
      //alert(' age : '+this.name.value);
    }
  }
}
