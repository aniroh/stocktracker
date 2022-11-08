//interface for stock quote object
export interface Stocks{
    
    c: number;
    h: number;
    l: number;
    o: number;
    pc: number;
    t: number;
    d: number;
      
}

// interface for symbols
export interface StockSymbol{
    count: number;
    result: Array<symbolArray>;
}

interface symbolArray{
    description: string;
    displaySymbol: string;
    symbol: string;
    type: string;
}

//interface for sentiments object

export interface sentimentsInterface{
    data: Array<sentimentdataArray>;
    symbol:string;

}
export interface sentimentdataArray{
    symbol: string;
    year: number;
    month: number;
    change: number;
    mspr: number;
}