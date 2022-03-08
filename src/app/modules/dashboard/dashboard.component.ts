import { Component, OnInit } from '@angular/core';
import { CurrenciesContext } from 'src/app/contexts/currencies.context';
import { ConversionResult } from 'src/app/models/conversionResult';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  conversionResultList : ConversionResult[]=[]
  constructor(private currenciesContext : CurrenciesContext) { }

  ngOnInit(): void {

    let currenciesList =  this.currenciesContext.getThePopularCurrencies();
    this.currenciesContext.currencyChanged("EUR")
    this.currenciesContext.$currencyChangedEvent.subscribe((response)=>{
      if(response){

        this.conversionResultList =[]
        let selectedValue = response || "EUR"
        currenciesList.forEach((item)=>{
          if(item != selectedValue)
          {
            this.currenciesContext.conversionProcess(selectedValue , item).subscribe((response)=> this.conversionResultList.push(response))
          }
        })
        
      }
    })
  }

}
