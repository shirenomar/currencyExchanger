import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ConversionResult } from '../models/conversionResult';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesContext {

  constructor(private http: HttpClient) { }


  fixerBaseApi = "http://data.fixer.io/api/";
  exchangerRateBaseApi = "https://v6.exchangerate-api.com/v6/9ba60408c7dd920e48e9d3ea/";

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

  conversionProcess(from :string , to: string) : Observable<ConversionResult>{
    return  this.http.get<any>(this.exchangerRateBaseApi + `pair/${from}/${to}`).pipe(map((response)=>{          
      return  new ConversionResult().MapFrom(response);
   }))

  }

  getCurrencyByKey(key : string):Observable<Currency>{
   return this.getSymbols().pipe(map((response)=> response.filter((item)=> item.key ==key)[0]));
  }
}
