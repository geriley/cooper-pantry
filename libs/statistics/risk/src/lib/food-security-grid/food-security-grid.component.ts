import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from "@angular/core";
import { UserAccessService, ICustomerDomain, FoodSecurityLevel } from '@cooper/api-services';
import { Observable, BehaviorSubject } from 'rxjs';
import { flatMap, map, shareReplay, first } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

interface ICustomerCriteria {
    foodSecurityLevel: FoodSecurityLevel;
}

@Component({
    selector: 'cooper-food-security-grid',
    templateUrl: './food-security-grid.component.html',
    styleUrls: ['./food-security-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodSecurityGrid {
    constructor(private service: UserAccessService) { }
    @Input() public set selectable(s: boolean) {
        this.displayedColumns = s ? ['select', 'firstName', 'lastName', 'number', 'security']
            : ['firstName', 'lastName', 'number', 'security'];
    }
    @Input() public set criteria(c: ICustomerCriteria) {
        this.criteriaObs.next(c);
    }
    @Output() public selectedUserIds = new EventEmitter<ICustomerDomain[]>();
    private criteriaObs = new BehaviorSubject({ foodSecurityLevel: undefined })

    public customers: Observable<MatTableDataSource<ICustomerDomain>> = this.service.getCustomers().pipe(
        flatMap((customers: ICustomerDomain[]) => {
            return this.criteriaObs.pipe(
                map((crit) => customers.filter((c) => !crit.foodSecurityLevel || c.foodSecurityLevel === crit.foodSecurityLevel))
            )
        }),
        map((src) => new MatTableDataSource<ICustomerDomain>(src)),
        shareReplay()
    );

    public numRows = this.customers.pipe(
        map((c) => c.data.length)
    );
    displayedColumns: string[] = [];


    selection = new SelectionModel<ICustomerDomain>(true, []);

    async isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = await this.numRows.pipe(first()).toPromise().then((num) => numSelected === num);
        return numRows;
    }

    async masterToggle() {
        const allSelected = await this.isAllSelected();
        const src = await this.customers.pipe(first()).toPromise();
        allSelected ?
            this.selection.clear() :
            src.data.forEach(row => this.selection.select(row));
    }

    public toggle(row) {
        if (row) {
            this.selection.toggle(row);
            this.selectedUserIds.emit(this.selection.selected);
        }
    }
}