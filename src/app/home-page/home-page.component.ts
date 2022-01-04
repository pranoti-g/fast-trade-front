import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { HomeService  } from '../../app/service/home.service';
import { HomeClass } from '../home-class';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 data:Observable<HomeClass[]>| any;
 symbol=[];
 price = [];
 symbol1=[];
 price1 = [];
 cnt:number=0;
 index:any;
  interval:any;

  constructor(
    private homeService:HomeService,
    private router: Router,
  ) { }
 
  ngOnInit(): void {
   timer(0,1000).subscribe(
     ()=>{
      this.homeService.getAllTrade().subscribe(
        (data) =>{this.symbol=data[0]
          this.price=data[1];
          this.data=data;
     
          this.symbol1 =this.symbol.slice(5);
          console.log(this.symbol1);
  
          this.price1 =this.price.slice(5);
          console.log(this.price1);
      
      }  
      );
    
     }
   )
  //   setInterval(function(){
  //   window.location.reload();
  //   },10000);
   }

refresh(){
 this.data = this.homeService.getAllTrade();
        this.symbol=this.data[0]
        this.price=this.data[1];
        this.index=this.symbol.length;
        if(this.symbol.length>5){
       
          for(let i=5;i<=this.symbol.length;i++){
            console.log("in the loop"+this.symbol[i]);
            this.symbol1=this.symbol[i];
            this.price1=this.price[i];
            console.log(this.symbol1.length);
         //   console.log(this.symbol1);
          }
        }
       
 
}

 
  getDetails(symbol:string){
    this.router.navigate(['details',symbol]);
  }

  count(){
if(this.cnt>5){
  return true;
}else{
  return false;
}
  }

  
  }


