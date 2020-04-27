import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IInventoryDomain } from '@cooper/api-services';

@Component({
    selector: 'cooper-inventory-table',
    templateUrl: './inventory-table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryTableComponent {
    @Input() set items(i) {
        this.dataSource = new MatTableDataSource<IInventoryDomain>(i ?? []);
    }
    @Output() selections = new EventEmitter<string[]>();
    public displayedColumns: string[] = ['select', 'name', 'quantity'];
    public dataSource = new MatTableDataSource<IInventoryDomain>([]);
    public selection = new SelectionModel<string>(true, []);

    public isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    public masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row.fdcId));
    }

    public toggle(row) {
        if (row) {
            this.selection.toggle(row.fdcId);
        }
        this.selections.emit(this.selection.selected);
    }

    public isSelected(row: IInventoryDomain) {
        return this.selection.isSelected(row.fdcId);
    }
}