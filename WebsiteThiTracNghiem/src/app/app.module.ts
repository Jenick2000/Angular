import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([ 
      { path: '', 	component: HomeComponent }, 
      {path: 'contact', component:ContactComponent},
      {path: 'about', component:AboutComponent},
      {path: 'feedback', component:FeedbackComponent},
      { path: 'products/:productId', component: HomeComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
     
     ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
