import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
    {
      path:'',
      children:[
        {
          path: '',
          loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
        },
        {
          path: 'currencies',
          loadChildren: () => import('./modules/currencies/currencies.module').then(m => m.CurrenciesModule)
        }

      ]

      
    }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
