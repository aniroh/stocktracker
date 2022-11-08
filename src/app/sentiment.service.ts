import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sentimentsInterface,StockSymbol } from './stocks';


@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  constructor(private http: HttpClient) { 

    this.pastdateobj.setMonth(this.pastdateobj.getMonth() - 2);
    this.currentdate = this.currentdateobj.getFullYear()+"-"+this.twodigitmonth(this.currentdateobj)+"-"+this.twodigitday(this.currentdateobj);
    this.pastdate = this.pastdateobj.getFullYear()+"-"+this.twodigitmonth(this.pastdateobj)+"-"+this.twodigitday(this.pastdateobj);
  }
  symbol: string='';
  currentdateobj: Date = new Date();
  pastdateobj: Date=new Date();

  //converts the month into a two digit number,required for URL
  twodigitmonth(obj1: Date){
    var month = obj1.getMonth().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
    return month
  }


  //converts the day into a two digit number, required for URL
  twodigitday(obj1:Date){
    var day = obj1.getDate().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
    return day
  }


  currentdate="";
  pastdate = "";
//http observable where the api will be subscribed for sentiments
  getSentiment() {
    console.log(this.symbol);
    console.log(this.pastdate);
    return this.http.get<sentimentsInterface>("https://finnhub.io/api/v1/stock/insider-sentiment?symbol="+this.symbol+"&from="+this.pastdate+"&to="+this.currentdate+"&token=bu4f8kn48v6uehqi3cqg");
  }

  getSymbol(data: string){
    this.symbol=data;
    console.log(this.symbol);
    
  }
  //http observable where the stock symbol name ap will be subscribed
  getName(){
    return this.http.get<StockSymbol>("https://finnhub.io/api/v1/search?q="+this.symbol+"&token=bu4f8kn48v6uehqi3cqg")
  }
}
