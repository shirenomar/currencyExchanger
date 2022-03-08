import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ConversionResult } from 'src/app/models/conversionResult';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-conversion-card',
  templateUrl: './conversion-card.component.html',
  styleUrls: ['./conversion-card.component.scss']
})
export class ConversionCardComponent implements OnInit {

  amount ;
  fromValue :Currency = new Currency;
  conversionResult: ConversionResult;
  conversionValue: number;
  toValue : Currency = new Currency();
  currencies : Currency[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getSymbols()
  }

  getSymbols(){

    this.http.get<any>("http://data.fixer.io/api/symbols?access_key=398dae7c7b829a8c7fa8717b6920b002").pipe(map((response)=> {

      Object.keys(response.symbols).map((currency)=>{
        let item = new Currency();
        item.key = currency;
        item.value = response.symbols[currency]
        this.currencies.push(item);
      })

      this.fromValue = this.currencies.filter((item)=> item.key =="EUR")[0];
      this.toValue = this.currencies.filter((item)=> item.key =="USD")[0];
  })).subscribe()
  }


  convert(){

    this.http.get<any>(`https://v6.exchangerate-api.com/v6/9ba60408c7dd920e48e9d3ea/pair/${this.fromValue.key}/${this.toValue.key}`).subscribe((response)=>{
         
        this.conversionResult = new ConversionResult().MapFrom(response);
        this.conversionValue = this.conversionResult.conversionRate * this.amount
        console.log(this.conversionResult)
    })
  }

  
  onSwap(from , to){
    let temp = from;
    this.fromValue=to
    this.toValue=temp
  }


}
