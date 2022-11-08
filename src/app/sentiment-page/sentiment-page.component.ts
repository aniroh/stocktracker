import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SentimentService } from '../sentiment.service';
import { sentimentsInterface,StockSymbol,sentimentdataArray } from '../stocks';

@Component({
  selector: 'app-sentiment-page',
  templateUrl: './sentiment-page.component.html',
  styleUrls: ['./sentiment-page.component.css']
})
export class SentimentPageComponent implements OnInit {

  constructor(private route:ActivatedRoute,private fetchsentiment: SentimentService) { }
  symbolName='';
  sdescription='';
  arrowURL='';
  sname: StockSymbol|undefined; //object which will subscribe to the API values of symbol name search
  newdata:sentimentsInterface|undefined; //object which will subscribe to the API values of sentiments
  months=[ "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ];
  
  ngOnInit(): void {
    this.symbolName = this.route.snapshot.params['symbol']; //get symbol from route
    this.fetchsentiment.getSymbol(this.symbolName); //pass symbol to service class
    this.fetchsentiment.getSentiment().subscribe((res: sentimentsInterface)=>{
      
      this.newdata=res; //subscribe to http observable for sentiments api and pass values to newdata
      console.log(this.newdata);

      

    })

    this.fetchsentiment.getName().subscribe((stockname: StockSymbol)=>{
      //subscribe to http observable for symbol name api and pass values to sname
      this.sname=stockname;
      this.sdescription=this.sname?.result[0].description;
      console.log(this.sname);
    })


  }
}
