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
 count =5;
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
       
 
}

 
  getDetails(symbol:string){
    this.router.navigate(['details',symbol]);
  }

  
  }


