import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { ApiServicesModule } from '@cooper/api-services';
import { InventorySearchComponent } from './components/inventory-search/inventory-search.component';
import { InventoryTableComponent } from './components/inventory-table/inventory-table.component';
import { InventoryQuantityTable } from './components/inventory-quantity/inventory-quantity.component';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    ApiServicesModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule    
  ],
  declarations: [
    InventorySearchComponent,
    InventoryTableComponent,
    InventoryQuantityTable,
  ],
  exports: [
    InventorySearchComponent,
    InventoryQuantityTable
  ]
})
export class AdminInventoryModule { }
