import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyDetailsComponent } from './currency-details.component';
import { CurrenciesRouting } from './currencies.routing';
import { appCommonModule } from 'src/app/common/app-common.module';



@NgModule({
  declarations: [
    CurrencyDetailsComponent
  ],
  imports: [
    CommonModule,
    CurrenciesRouting,
    appCommonModule
  ]
})
export class CurrenciesModule { }
