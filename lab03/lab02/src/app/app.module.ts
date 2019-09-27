import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{RouterModule} from'@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { ListStudentComponent } from './list-student/list-student.component';
import { DetailsStudentComponent } from './details-student/details-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    DetailsStudentComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    RouterModule.forRoot([ 
      { path: '', 	component: ListStudentComponent }, 
      {path: 'students', component: ListStudentComponent},
      { path: 'details/:studentId', component: DetailsStudentComponent },//:productId lay id san pham
      { path: '**', redirectTo: '', pathMatch: 'full' },
     
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
