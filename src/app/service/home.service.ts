import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8080/";
  url = "";

  getAllTrade():Observable<any>
  {
    this.url="https://fast-trade.azurewebsites.net/home";
    //this.url="http://localhost:8080/home";
    return this.http.get(this.url);
  }

  getDetails(symbol:string):Observable<any>
  {
    this.url="https://fast-trade.azurewebsites.net/details?symbol="+symbol;
    //this.url="http://localhost:8080/details?symbol="+symbol;
    return this.http.get(this.url);
  }
}
