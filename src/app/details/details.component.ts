import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  name:any;
symbol=[];
price=[];
timestamp=[];
interval :any;

  constructor(private _Activatedroute:ActivatedRoute,
    private homeService:HomeService,
    private router: Router,) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.name = params.get('symbol'); 
      
      });
      console.log(this.symbol);
     timer(0,1000).subscribe(() =>{
      this.homeService.getDetails(this.name).subscribe(
        data =>{
          this.symbol=data[0];
          this.price=data[1];
          this.timestamp=data[2];
         console.log(data);
        }
      );
     })

    //  setInterval(function() { window.location.reload();}, 5000);
      
     // window.location.reload();
  }

  Back(){
    this.router.navigate(['']);
  }

}
