import { Component, Input, EventEmitter, Output } from "@angular/core";
import { IInventoryDomain } from '@cooper/api-services';

@Component({
    selector: 'cooper-inventory-quantity',
    templateUrl: './inventory-quantity.component.html',
    styleUrls: ['./inventory-quantity.component.html']
})
export class InventoryQuantityTable {
    @Input('inventory') public set items(i: IInventoryDomain[]) {
        this.inventory = i;
    }
    @Output() public save = new EventEmitter<IInventoryDomain[]>();

    public inventory = [];
    private updatedInventory: IInventoryDomain[] = [];
    public displayedColumns: string[] = ['name', 'quantity'];

    public setQuantity(row: IInventoryDomain, q: number) {
        const item = {
            ...row,
            quantity: q
        };
        this.updatedInventory = [
            ...this.updatedInventory.filter((i)=> i.fdcId !== row.fdcId),
            item
        ];
    }

    public submit() {
        this.save.emit(this.updatedInventory);
    }
}