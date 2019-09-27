import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.css']
})
export class ManagementUserComponent implements OnInit {
  public greeting="greeting Jenick JK";
  constructor() {
    
   }

  ngOnInit() {
  }
  onclick(){
    
    alert('test ok'+this.greeting);
    console.log("test ok");
    this.greeting;
  }
  logUser(value){

    console.log(value);
  }
}
