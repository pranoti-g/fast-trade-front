import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path:'' ,component:HomePageComponent},
  {path:'details/:symbol',component:DetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
