import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
students =[
    {ID:1,FirstMidName:"Carson",LastName:"Alexander",EnrollmentDate:  "2005-09-01"},
    {ID:2,FirstMidName:"Meredith",LastName:"Alonso",EnrollmentDate:  "2002-09-01"}, 
    {ID:3,FirstMidName:"Arturo",LastName:"Anand",EnrollmentDate: "2003-09-01"}, 
    {ID:4,FirstMidName:"Gytis",LastName:"Barzdukas",EnrollmentDate:"2002-09-01"},     
    {ID:5,FirstMidName:"Yan",LastName:"Li",EnrollmentDate:"2002-09-01"}, 
    {ID:6,FirstMidName:"Peggy",LastName:"Justice",EnrollmentDate:"2001-09-01"},  
    {ID:7,FirstMidName:"Laura",LastName:"Norman",EnrollmentDate:"2003-09-01"},  
    {ID:8,FirstMidName:"Nino",LastName:"Olivetto",EnrollmentDate:"2005-09-01"}
    ];
    
 xoa(id){
  var del=confirm("Are you sure you want to delete this record?");
  if (del==true){
    for(var i=0 ;i<this.students.length;i++){
      if(this.students[i].ID==id)
      return this.students.splice(i,1);
   }
  }
 }
 p: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
