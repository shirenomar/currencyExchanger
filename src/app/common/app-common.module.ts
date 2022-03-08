import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ConversionCardComponent } from './components/conversion-card/conversion-card.component';

@NgModule({
  declarations: [ConversionCardComponent],
  exports:[ConversionCardComponent],
  imports:[
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ]
})
export class appCommonModule { }
