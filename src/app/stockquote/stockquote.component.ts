import { Component, OnInit, Input,OnChanges } from '@angular/core';
import { FetchStockQuoteService } from '../fetch-stock-quote.service';
import { Stocks, StockSymbol } from '../stocks';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-stockquote',
  templateUrl: './stockquote.component.html',
  styleUrls: ['./stockquote.component.css']
})
export class StockquoteComponent implements OnInit{
  newdata:Stocks|undefined; //object which will subscribe to the API values of quotes
  sname: StockSymbol|undefined; //object which will subscribe to the API values of symbol name search
  sdescription='';
  arrowURL= '';
  closebool=true; 
  valuesbool=false; //boolean value to check whether the object returned from api is null

  
  ngOnInit(): void {
    console.log(this.symbol);
    this.stockquoteinfo.getSymbol(this.symbol); //pass the symbol to the service
    this.stockquoteinfo.getQuotes().subscribe((res: Stocks)=>{
      //an observable from our service class, returns object of quotes API in newdata
      this.newdata=res;
      if(this.newdata.d!==null){ //if object exists, then show component, else delete the symbol from local storage and dont show component
        this.valuesbool=true;
      }
      else{
        let stocks = localStorage.getItem("stocks");
        if(stocks!==null){
          let stockArray=JSON.parse(stocks);
          let idx=stockArray.indexOf(this.symbol);
          if (idx > -1) { // only splice array when item is found
            stockArray.splice(idx, 1); 
          }
          localStorage.setItem('stocks', JSON.stringify(stockArray));

    }
      }
      //logic to display green or red arrow
      if(this.newdata!=undefined){
        console.log("hello");
        if(this.newdata.d>0){
          this.arrowURL='assets/green-arrow.png';
        }
        else{
          this.arrowURL = 'assets/red-arrow1.png';
        }
      }
      
    })

    //subscribe to symbol name API
    this.stockquoteinfo.getName().subscribe((stockname: StockSymbol)=>{
      this.sname=stockname;
      this.sdescription=this.sname?.result[0].description;
      console.log(this.sname);
    })


    
  }
  //get the value of symbol from parent component homepage
  @Input() symbol='';

  //destroysymbol method called after the close button is pressed
  destroysymbol(){
    let stockArray = [];
    let stocks = localStorage.getItem("stocks");
    if(stocks!==null){
      stockArray=JSON.parse(stocks);
    }

    let index1 = stockArray.indexOf(this.symbol);
    if (index1 > -1) { // only splice array when item is found
      stockArray.splice(index1, 1); 
    }
    localStorage.setItem('stocks', JSON.stringify(stockArray));
    this.closebool=false;


  }

  
  constructor(private stockquoteinfo: FetchStockQuoteService){
    

    

  }

}
