import { Injectable } from '@nestjs/common';
import { IPayload } from '@cooper/api-interfaces';

@Injectable()
export class ResourceServiceHelper {
    public mapToDTOListPayload<Entity extends { id: number }, Resource>(resourceType: string,
        {
            entities,
            attributeMapper
        }: {
            entities: Entity[],
            attributeMapper: (entity: Entity) => Resource
        }): IPayload<Resource> {
        return {
            data: entities
                .filter((e) => e !== undefined)
                .map((entity) => ({
                    id: entity.id.toString(),
                    type: resourceType,
                    attributes: attributeMapper(entity)
                }))
        };
    }

    public mapToDTOPayload<Entity extends { id: number }, Resource>(resourceType: string, {
        entity,
        attributeMapper
    }: {
        entity: Entity,
        attributeMapper: (entity: Entity) => Resource
    }): IPayload<Resource> {
        return {
            data: entity ? {
                id: entity.id.toString(),
                type: resourceType,
                attributes: attributeMapper(entity)
            } : undefined,
        };
    }

    public async addRequestedResources<T extends { id: number }>(request: T | T[], addMethod: (e: T) => Promise<T>) {
        const data = Array.isArray(request) ? request : [request];
        const entities: T[] = [];
        for (const d of data.filter((de) => de !== undefined && de !== null)) {
            const p = await addMethod(d);
            entities.push(p);
        }
        return entities;
    }
}