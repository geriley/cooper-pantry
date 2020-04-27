import { Injectable } from '@angular/core';
import { IInventoryListing, IPayloadData, IPayload, CooperResourceType } from '@cooper/api-interfaces';
import { map } from 'rxjs/operators';
import { PantryDataService } from '../http-services/pantry-data.service';
import { Observable } from 'rxjs';
import { IInventoryDomain } from '../interfaces';

@Injectable()
export class InventoryAccessService {
    constructor(private service: PantryDataService) { }
    public search(pantryId: string, query: string): Observable<IInventoryDomain[]> {
        return this.service.searchInventory(pantryId, query).pipe(
            map((data) => this.convertDTO(pantryId, data))
        );
    }

    public get(pantryId: string): Observable<IInventoryDomain[]> {
        return this.service.getInventory(pantryId).pipe(
            map((data) => this.convertDTO(pantryId, data))
        );
    }

    public updateInventory(inventory: IInventoryDomain) {
        return this.service.updateInventory(inventory.pantryId, {
            data: {
                id: inventory.fdcId,
                type: CooperResourceType.InventoryListing,
                attributes: {
                    quantity: inventory.quantity,
                    description: inventory.description
                }
            }
        })
    }

    private convertDTO(pantryId: string, dto: IPayload<IInventoryListing>): IInventoryDomain[] {
        const data = dto.data as IPayloadData<IInventoryListing>[];
        return data.map((d) => ({
            fdcId: d?.id,
            pantryId: pantryId,
            quantity: d?.attributes?.quantity,
            description: d?.attributes?.description
        }));
    }
}