import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ConversionResult } from '../models/conversionResult';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesContext {

  constructor(private http: HttpClient) { }


  private fixerBaseApi = "http://data.fixer.io/api/";
  private exchangerRateBaseApi = "https://v6.exchangerate-api.com/v6/9ba60408c7dd920e48e9d3ea/";
  currencyChangedEvent = new BehaviorSubject(null);
  $currencyChangedEvent = this.currencyChangedEvent.asObservable()

  getSymbols(): Observable<Currency[]>{

    return this.http.get<any>( this.fixerBaseApi + "symbols?access_key=398dae7c7b829a8c7fa8717b6920b002").pipe(map((response)=> {
       let currencies : Currency[] =[]
      Object.keys(response.symbols).map((currency)=>{
        let item = new Currency();
        item.key = currency;
        item.value = response.symbols[currency]
        currencies.push(item);
      })

       return currencies;
    }))
  }

  getThePopularCurrencies():string[]{
     let popularCurrencies = ["EUR", "USD" , "EGP" , "JPY", "GBP", "CHF"] 
    return popularCurrencies;
  }

  currencyChanged(value){
      this.currencyChangedEvent.next(value);
  }

  conversionProcess(from :string , to: string) : Observable<ConversionResult>{
    return  this.http.get<any>(this.exchangerRateBaseApi + `pair/${from}/${to}`).pipe(map((response)=>{          
      return  new ConversionResult().MapFrom(response);
   }))

  }

  getCurrencyByKey(key : string):Observable<Currency>{
   return this.getSymbols().pipe(map((response)=> response.filter((item)=> item.key ==key)[0]));
  }

  historicalRate(){
    this.http.get(this.fixerBaseApi + "2022-01-24?access_key=398dae7c7b829a8c7fa8717b6920b002&symbols=USD").subscribe((response)=> console.log(response))
  }


  //base_currency_access_restricted
  changeBaseCurrency(){
    this.http.get(this.fixerBaseApi + "latest?access_key=398dae7c7b829a8c7fa8717b6920b002&base=USD").subscribe((response)=> console.log(response))
  }
}
