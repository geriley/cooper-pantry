import { Injectable } from '@nestjs/common';
import { IPayload, IPayloadData, CooperResourceType } from '@cooper/api-interfaces';
import { IPayloadDataRelationship } from '../../../../../libs/api-interfaces/src/lib/dto/payload.model';

export interface IRelationships {
    relationshipName: string;
    relationshipType: CooperResourceType;
    ids: number[];
}

@Injectable()
export class ResourceServiceHelper {
    public mapToDTOListPayload<Entity extends { id: number | string }, Resource>(resourceType: string,
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

    public mapToDTOPayload<Entity extends { id: number | string }, Resource>(resourceType: string, {
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

    public addRelationships<R>(resource: IPayloadData<R>, relationships: IRelationships): IPayloadData<R> {
        if (relationships && relationships.ids && relationships.ids.length > 0) {
            return {
                ...resource,
                relationships: {
                    ...resource.relationships,
                    [relationships.relationshipName]: relationships.ids.length > 0 ? { id: relationships.ids[0].toString(), type: relationships.relationshipType } : [
                        ...relationships.ids.map((id) => ({ id: id.toString(), type: relationships.relationshipType }))
                    ]
                }

            }
        } else return { ...resource };
    }

    public async addRequestedResources<T extends { id: number | string }>(request: T | T[], addMethod: (e: T) => Promise<T>) {
        const data = Array.isArray(request) ? request : [request];
        const entities: T[] = [];
        for (const d of data.filter((de) => de !== undefined && de !== null)) {
            const p = await addMethod(d);
            entities.push(p);
        }
        return entities;
    }
}