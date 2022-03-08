import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyDetailsComponent } from './currency-details.component';


const routes: Routes = [
  {
    path:"",
    //redirectTo:'currency-details'

  },
  { path: "currency-details",  component: CurrencyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrenciesRouting { }
