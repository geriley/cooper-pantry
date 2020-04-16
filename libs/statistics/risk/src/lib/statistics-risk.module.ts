import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSecurityGrid } from './food-security-grid/food-security-grid.component';
import { ApiServicesModule } from '@cooper/api-services';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule, 
    ApiServicesModule,
    MatTableModule,
  ],
  declarations: [
    FoodSecurityGrid
  ],
  exports: [
    FoodSecurityGrid
  ]
})
export class StatisticsRiskModule { }
