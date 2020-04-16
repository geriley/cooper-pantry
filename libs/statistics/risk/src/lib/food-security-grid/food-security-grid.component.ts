import { ChangeDetectionStrategy, Component } from "@angular/core";
import { UserAccessService, ICustomerDomain } from '@cooper/api-services';
import { Observable } from 'rxjs';

@Component({
    selector: 'cooper-food-security-grid',
    templateUrl: './food-security-grid.component.html',
    styleUrls: ['./food-security-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodSecurityGrid {
    constructor(private service: UserAccessService) { }

    public customers: Observable<ICustomerDomain[]> = this.service.getCustomers();
    displayedColumns: string[] = ['userId', 'security'];
}