import { Component, Input, OnInit } from '@angular/core';
import { ConversionResult } from 'src/app/models/conversionResult';

@Component({
  selector: 'app-currency-rate-card',
  templateUrl: './currency-rate-card.component.html',
  styleUrls: ['./currency-rate-card.component.scss']
})
export class CurrencyRateCardComponent implements OnInit {

  @Input() conversionResult : ConversionResult;
  constructor() { }

  ngOnInit(): void {
  }

}
