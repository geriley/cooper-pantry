import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { UserAccessService, ICustomerDomain, FoodSecurityLevel } from '@cooper/api-services';
import { Observable, BehaviorSubject } from 'rxjs';
import { flatMap, map, shareReplay, first } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';

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
        this.displayedColumns = s ? ['select', 'firstName', 'lastName', 'security']
            : ['firstName', 'lastName', 'security'];
    }
    @Input() public set criteria(c: ICustomerCriteria) {
        this.criteriaObs.next(c);
    }
    private criteriaObs = new BehaviorSubject({ foodSecurityLevel: undefined })

    public customers: Observable<ICustomerDomain[]> = this.service.getCustomers().pipe(
        flatMap((customers: ICustomerDomain[]) => {
            return this.criteriaObs.pipe(
                map((crit) => customers.filter((c) => !crit.foodSecurityLevel || c.foodSecurityLevel === crit.foodSecurityLevel))
            )
        }),
        shareReplay()
    );

    public numRows = this.customers.pipe(
        map((c) => c.length)
    );
    displayedColumns: string[] = [];


    selection = new SelectionModel<ICustomerDomain>(true, []);

    /** Whether the number of selected elements matches the total number of rows. */
    async isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = await this.numRows.pipe(first()).toPromise().then((num) => numSelected === num);
        return numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    async masterToggle() {
        const allSelected = await this.isAllSelected();
        const src = await this.customers.pipe(first()).toPromise();
        allSelected ?
            this.selection.clear() :
            src.forEach(row => this.selection.select(row));
    }
}