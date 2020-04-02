import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';
import { Page3Component } from './page3.component';

const routes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component }
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ 
    AppComponent, 
    Page1Component,
    Page2Component,
    Page3Component
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
