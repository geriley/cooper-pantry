import { Component } from '@angular/core';
import { IInventoryDomain, InventoryAccessService } from '@cooper/api-services';
import { UserContextFacade } from '@cooper/state/user-context';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { flatMap, map, scan, startWith, shareReplay } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'cooper-manage-inventory',
    templateUrl: './add-inventory.component.html',
})
export class ManageInventoryComponent {
    constructor(
        private context: UserContextFacade,
        private service: InventoryAccessService,
        private snack: MatSnackBar,
    ) { }
    private pushInventory = new Subject<IInventoryDomain[]>();
    private selectedIds = new BehaviorSubject<string[]>([]);
    private inventoryItems = this.pushInventory.pipe(
        scan((acc: IInventoryDomain[], next: IInventoryDomain[]) => {
            const newItems = next.filter((n) => !acc.map((a) => a.fdcId).some((id) => n.fdcId === id));
            return [...acc, ...newItems];
        }, []),
        startWith([]),
        shareReplay(),
    );

    public selectedInventory: Observable<IInventoryDomain[]> = this.selectedIds.pipe(
        flatMap((ids: string[]) => this.inventoryItems.pipe(
            map((items) => items.filter((i) => ids.some((id) => id === i.fdcId)))
        )),
    );

    public pantryId = this.context.user.pipe(
        map((u) => u.associatedPantryId)
    );

    public setSelections(ids: string[]) {
        this.selectedIds.next(ids);
    }

    public collectInventory(inventory: IInventoryDomain[]) {
        this.pushInventory.next(inventory);
    }

    public save(inventory: IInventoryDomain[]) {
        const promises = inventory.map((i) => {
            return this.service.updateInventory(i)
                .toPromise();
        });
        Promise.all(promises)
            .then(() => this.snack.open('Successfully updated all inventory quantities', undefined, { duration: 2000 }))
            .catch(() => this.snack.open('Failed to update some inventory quantities', undefined, { duration: 2000 }));
    }

}