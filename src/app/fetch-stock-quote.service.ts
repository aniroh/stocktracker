import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Stocks, StockSymbol } from './stocks';

@Injectable({
  providedIn: 'root'
})
export class FetchStockQuoteService {

  constructor(private http: HttpClient) { }
  symbol='';
  token='bu4f8kn48v6uehqi3cqg';


  getQuotes() { //http observable for quotes API
    console.log(this.symbol);
    return this.http.get<Stocks>('https://finnhub.io/api/v1/quote?symbol='+this.symbol+'&token='+this.token);
  }

  getSymbol(data: string){
    this.symbol=data;
    console.log(this.symbol);
    
  }

  getName(){ //http observable for symbol name API
    return this.http.get<StockSymbol>("https://finnhub.io/api/v1/search?q="+this.symbol+"&token="+this.token);
  }
  
}
