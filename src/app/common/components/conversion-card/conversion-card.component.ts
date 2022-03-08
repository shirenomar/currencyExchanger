import { Component, Input, OnInit } from '@angular/core';
import { CurrenciesContext } from 'src/app/contexts/currencies.context';
import { ConversionResult } from 'src/app/models/conversionResult';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-conversion-card',
  templateUrl: './conversion-card.component.html',
  styleUrls: ['./conversion-card.component.scss']
})
export class ConversionCardComponent implements OnInit {

  amount ;
  @Input() baseCode :Currency = new Currency;
  @Input() targetCode : Currency = new Currency();
  @Input() detailsMode : boolean;
  baseCodeChanged:boolean;
  conversionResult: ConversionResult;
  conversionValue: number;
  currencies : Currency[] = [];
  constructor(private currenciesContext : CurrenciesContext) { }

  ngOnInit(): void {
    this.getSymbols()
  }

  

  getSymbols(){

    this.currenciesContext.getSymbols().subscribe((response)=>this.currencies = response)
    
    if(!this.detailsMode)
    {
      this.currenciesContext.getCurrencyByKey("EUR").subscribe((currency)=> this.baseCode = currency)
      this.currenciesContext.getCurrencyByKey("USD").subscribe((currency)=> this.targetCode = currency)

    }
  }


  convert(){


    this.currenciesContext.conversionProcess(this.baseCode.key , this.targetCode.key).subscribe((response)=>{       
        this.conversionResult = response;
        this.conversionValue = this.conversionResult.conversionRate * this.amount
    })



    //this.currenciesContext.historicalRate();
  }

  valueChanged(value){
    this.currenciesContext.currencyChanged(value)

  }

  
  onSwap(from , to){
    if(!this.detailsMode){
      let temp = from;
      this.baseCode=to
      this.targetCode=temp
      this.valueChanged(this.baseCode.key)
    }
  }


}
