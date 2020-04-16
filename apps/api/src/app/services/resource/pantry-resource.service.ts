import { Injectable } from "@nestjs/common";
import { PantryRepoService } from '../repository';
import { Pantry } from '../../entities';
import { IPantryDTO, IPayload, IPayloadData, CooperResourceType } from '@cooper/api-interfaces';

@Injectable()
export class PantryResourceService {
    constructor(
        private pantryRepo: PantryRepoService
    ) { }
    
    private readonly resourceType = CooperResourceType.Pantry;

    public async get(): Promise<IPayload<IPantryDTO>> {
        const pantries = await this.pantryRepo.findAll();
        return {
            data: pantries.map((p) => ({
                type: this.resourceType,
                id: p.id.toString(),
                attributes: this.mapPantryEntityToResource(p)
            }))
        };
    }

    public async upsert(request: IPayload<IPantryDTO>): Promise<IPayload<IPantryDTO>> {
        const data = Array.isArray(request.data) ? request.data : [request.data];
        const createdEntities: Pantry[] = [];
        for (const d of data.filter((de) => de !== undefined && de !== null)) {
            const newResource: Pantry = {
                id: d.id ? parseInt(d.id, 10) : undefined,
                name: d.attributes.name,
            };
            const p = await this.pantryRepo.add(newResource);
            createdEntities.push(p);
        }
        const mappedEntities: IPayloadData<IPantryDTO>[] = createdEntities.map((e) => ({
            id: e.id.toString(),
            type: this.resourceType,
            attributes: this.mapPantryEntityToResource(e)
        }));

        return {
            data: Array.isArray(request.data)
                ? mappedEntities
                : (mappedEntities.length === 1 ? mappedEntities[0] : undefined)
        }
    }

    private mapPantryEntityToResource(pantry: Pantry): IPantryDTO {
        return {
            name: pantry.name
        };
    }

}