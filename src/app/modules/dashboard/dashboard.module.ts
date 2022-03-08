import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { appCommonModule } from 'src/app/common/app-common.module';
import { DashbaordRouting } from './dashboard.routing';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    appCommonModule,
    DashbaordRouting
  ]
})
export class DashboardModule { }
