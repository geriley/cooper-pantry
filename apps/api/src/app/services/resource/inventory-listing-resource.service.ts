import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InventoryRepoService } from '../repository/inventory-repo.service';
import { IInventoryListing, IPayloadData, IPayload, CooperResourceType } from '@cooper/api-interfaces';

interface IFoodSearchDTO {
    foods: {
        fdcId: number;
        description: string;
    }[]
}

@Injectable()
export class InventoryListingResourceService {
    constructor(
        private httpService: HttpService,
        private repo: InventoryRepoService
    ) { }

    public async search(pantryId: string, query: string): Promise<IPayload<IInventoryListing>> {
        const searchRes = await this.performSearch(query).toPromise();
        const foods = searchRes.foods;
        const pantryIdNum = parseInt(pantryId, 10);
        const listings = await this.repo.findAll([pantryIdNum]);
        const dto: IPayloadData<IInventoryListing>[] = foods.map((f) => {
            const id = f.fdcId.toString();
            const listing = listings.find((l) => l.fdcId === id);
            return {
                id,
                type: CooperResourceType.InventoryListing,
                attributes: {
                    quantity: listing?.quantity ?? 0,
                    description: f.description,
                }
            }
        }).sort((a, b) => b.attributes.quantity - a.attributes.quantity);
        return {
            data: dto
        };
    }

    public async upsert(pantryId: string, inventory: IPayloadData<IInventoryListing>) {
        const entity = await this.repo.add({
            fdcId: inventory.id,
            pantryId: parseInt(pantryId, 10),
            description: inventory.attributes.description,
            quantity: inventory.attributes.quantity
        });
        return {
            data: {
                id: entity.fdcId,
                type: CooperResourceType.InventoryListing,
                attributes: {
                    quantity: entity?.quantity ?? 0,
                    description: entity?.description ?? 'Unnamed Item'
                }
            }
        }
    }

    public async get(pantryId: string): Promise<IPayload<IInventoryListing>> {
        const pantryIdNum = parseInt(pantryId, 10);
        const listings = await this.repo.findAll([pantryIdNum]);
        const dto: IPayloadData<IInventoryListing>[] = listings.map((l) => ({
            id: l.fdcId,
            type: CooperResourceType.InventoryListing,
            attributes: {
                quantity: l?.quantity ?? 0,
                description: l?.description
            }
        }));
        return {
            data: dto
        };
    }

    private performSearch(query: string): Observable<IFoodSearchDTO> {
        const baseUrl = 'https://api.nal.usda.gov/fdc/v1/foods/search';
        return this.httpService.get<IFoodSearchDTO>(baseUrl, {
            params: {
                ['api_key']: process.env.USDA_API_KEY,
                ['query']: query,
            }
        }).pipe(
            map((res) => res.data)
        );
    }
}