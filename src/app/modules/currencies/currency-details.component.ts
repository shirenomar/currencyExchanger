import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrenciesContext } from 'src/app/contexts/currencies.context';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit {

  base : Currency;
  target : Currency;
  value : string; 
  constructor( private route : ActivatedRoute , private currenciesContext : CurrenciesContext) { }

  ngOnInit(): void {


    this.currenciesContext.getCurrencyByKey(this.route.snapshot.params['key']).subscribe((currency)=> this.base = currency)
    this.currenciesContext.getCurrencyByKey(this.route.snapshot.params['target']).subscribe((currency)=> this.target = currency)
  }

}
