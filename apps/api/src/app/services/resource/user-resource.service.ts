import { Injectable } from "@nestjs/common";
import { UserRepoService } from '../repository';
import { IPayload, IPayloadData, IUserDTO, CooperResourceType, ISurveyScoreDTO, IPayloadDataRelationship, UserRole } from '@cooper/api-interfaces';
import { ResourceServiceHelper } from '../../common';
import { User } from '../../entities';
import { IUserSearchCriteria } from '../interfaces';
import { SurveyResponseResourceService } from './survey-responses.service';
import { PantryRepoService } from '../repository/pantry-repo.service';


@Injectable()
export class UserResourceService {
    constructor(
        private userRepo: UserRepoService,
        private scoresService: SurveyResponseResourceService,
        private pantryRepo: PantryRepoService,
        private helper: ResourceServiceHelper
    ) { }

    private readonly resourceType = CooperResourceType.User;

    public async getById(id: string): Promise<IPayload<IUserDTO>> {
        const user = await this.userRepo.getById(id);
        const dto = this.helper.mapToDTOPayload<User, IUserDTO>(
            this.resourceType,
            { entity: user, attributeMapper: (e) => this.mapEntityToResource(e) }
        );
        return {
            data: {
                ...dto.data as any,
                relationships: (user.staffedPantry) ? {
                    'employer': {
                        id: user.staffedPantry?.id.toString(),
                        type: CooperResourceType.Pantry
                    }
                } : undefined,
            }
        }
    }

    public async get(criteria: IUserSearchCriteria): Promise<IPayload<IUserDTO>> {
        const users = await this.userRepo.findAll();
        const userIds = users.map((u) => u.id);
        const scoreRelationships = await this.scoresService.getScores({ userIds });
        const score: { [userId: string]: number[] } = (scoreRelationships.data as IPayloadData<ISurveyScoreDTO>[]).map((s) => ({
            id: s.id,
            userId: (s.relationships['user'] as IPayloadDataRelationship).id
        })).reduce((acc, next) => {
            const userId = next.userId;
            const curr = acc[userId];
            return (curr)
                ? { ...acc, [userId]: [...curr, next.id] }
                : { ...acc, [userId]: [next.id] }
        }, {});

        const userData = this.helper.mapToDTOListPayload<User, IUserDTO>(
            this.resourceType,
            { entities: users, attributeMapper: (e) => this.mapEntityToResource(e) }
        );

        const dto = {
            data: (userData.data as IPayloadData<IUserDTO>[]).map((ud) => this.helper.addRelationships(ud, {
                ids: score[ud.id],
                relationshipName: CooperResourceType.SurveyResponse,
                relationshipType: CooperResourceType.SurveyResponse,
            }))
        };
        if (criteria && criteria.include && criteria.include.some((i) => i === CooperResourceType.SurveyResponse)) {
            return {
                ...dto,
                included: scoreRelationships.data as IPayloadData<ISurveyScoreDTO>[]
            };
        }
        else return dto;
    }

    public async upsert(request: IPayload<IUserDTO>): Promise<IPayload<IUserDTO>> {
        const data = Array.isArray(request.data) ? request.data : [request.data];
        const requestData = data.filter(d => d !== undefined).map((d) => this.mapPayloadToEntity(d));
        const addedEntities = await this.helper.addRequestedResources(requestData, (e) => {
            return this.userRepo.getById(e?.id).then((u) => {
                const addressId = u?.residentialAddress?.id;
                e.residentialAddress = (e.residentialAddress) ? { ...e.residentialAddress, id: addressId } : undefined;
                return this.userRepo.add(e);
            });            
        });

        return Array.isArray(request.data) ? this.helper.mapToDTOListPayload<User, IUserDTO>(
            this.resourceType,
            { entities: addedEntities, attributeMapper: (e) => this.mapEntityToResource(e) }
        ) : this.helper.mapToDTOPayload<User, IUserDTO>(
            this.resourceType,
            { entity: addedEntities[0], attributeMapper: (e) => this.mapEntityToResource(e) }
        );
    }

    public async addPantryRelationship(userId: string, request: IPayload<IPayloadDataRelationship>) {
        const user = await this.userRepo.getById(userId);
        const pantryId = parseInt((request.data as IPayloadDataRelationship).id, 10);
        const pantry = await this.pantryRepo.getById(pantryId);
        user.staffedPantry = pantry;
        const updatedUser = await this.userRepo.add(user);
        return this.getById(updatedUser.id);
    }


    private mapPayloadToEntity(data: IPayloadData<IUserDTO>): User {
        return {
            id: data.id ? data.id : undefined,
            givenName: data.attributes.firstName,
            familyName: data.attributes.lastName,
            userRole: data.attributes.userRole,
            residentialAddress: (data?.attributes?.address) ? {
                id: undefined,
                zipcode: data?.attributes?.address?.zipcode,
                address1: data?.attributes?.address?.address1,
                address2: data?.attributes?.address?.address2,
                city: data?.attributes?.address?.city,
                state: data?.attributes?.address?.state,
            } : undefined,
            mobilePhone: data?.attributes?.mobilePhone,
        };
    }

    private mapEntityToResource(e: User): IUserDTO {
        return {
            firstName: e.givenName,
            lastName: e.familyName,
            address: {
                zipcode: e?.residentialAddress?.zipcode,
                address1: e?.residentialAddress?.address1,
                address2: e?.residentialAddress?.address2,
                city: e?.residentialAddress?.city,
                state: e?.residentialAddress?.state,
            },
            userRole: e.userRole as UserRole,
            mobilePhone: e?.mobilePhone
        };
    }
}