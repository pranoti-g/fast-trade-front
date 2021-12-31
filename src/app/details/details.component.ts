import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private homeService:HomeService,) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.name = params.get('symbol'); 
      
      });
      console.log(this.symbol);
      this.homeService.getDetails(this.name).subscribe(
        data =>{
          this.symbol=data[0];
          this.price=data[1];
          this.timestamp=data[2];
         console.log(data);
        }
      );

      setInterval(function() { window.location.reload();}, 5000);
      
     // window.location.reload();
  }

}
