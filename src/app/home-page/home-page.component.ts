import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    this.homeService.getAllTrade().subscribe(
      (data) =>{this.symbol=data[0]
        this.price=data[1];
        this.data=data;
      console.log(this.data[0]);
      console.log(this.symbol.length);
      if(this.symbol.length>5){
        for(let i=0;i>5;i++){
          this.symbol1=data[0]
          this.price1=data[1];
        }
      }
    }  
    );

    setInterval(function(){
    window.location.reload();
    },5000);
  }

refresh(){
 this.data = this.homeService.getAllTrade();
        this.symbol=this.data[0]
        this.price=this.data[1];
        this.index=this.symbol.length;
        if(this.symbol.length>5){
          for(let i=0;i>5;i++){
            this.symbol1=this.data[0]
            this.price1=this.data[1];
            this.cnt++;
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


