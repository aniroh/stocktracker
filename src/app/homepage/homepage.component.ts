import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  ngOnInit(): void {
    //store the symbols from localstorage to a local array variable
    let stocks = localStorage.getItem("stocks");
    if(stocks!==null){
      this.tempArray=JSON.parse(stocks);
    }
  }
  //formcontrol property to take input values
  stockSymbol=new FormControl('');
  
  tempArray: string[]=[];
  stockArray: string[]=[];

  //after clicking the button, storing the symbol in local storage
  saveArray(){
    if (this.stockSymbol.value){
      console.log("wow1");

      if (localStorage.getItem("stocks") === null) {
        localStorage.setItem("stocks","[\""+this.stockSymbol.value+"\"]") //if empty, initiate the stocks property
      }
      else{
        let stocks = localStorage.getItem("stocks");
        if(stocks!==null){
          this.stockArray=JSON.parse(stocks); //store it in a temporary array variable
        }
        this.stockArray.push(this.stockSymbol.value); //push the new value in temporary array
        console.log(this.stockArray)
        localStorage.setItem('stocks', JSON.stringify(this.stockArray)); //store in localstorage
      }
      let stocks2 = localStorage.getItem('stocks');
      if(stocks2!==null){
        this.tempArray=JSON.parse(stocks2); //after storing the new value in local storage, get the value in new array variable for display
      }
    }
  }
}
