import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
