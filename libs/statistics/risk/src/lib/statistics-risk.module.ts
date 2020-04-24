import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodSecurityGrid } from './food-security-grid/food-security-grid.component';
import { ApiServicesModule } from '@cooper/api-services';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ApiServicesModule,
    MatTableModule,
    MatCheckboxModule

  ],
  declarations: [
    FoodSecurityGrid
  ],
  exports: [
    FoodSecurityGrid
  ]
})
export class StatisticsRiskModule { }
