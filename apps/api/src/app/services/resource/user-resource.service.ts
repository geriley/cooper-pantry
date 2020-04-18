import { Injectable } from "@nestjs/common";
import { UserRepoService } from '../repository';
import { IPayload, IPayloadData, IUserDTO, CooperResourceType, ISurveyScoreDTO, IPayloadDataRelationship } from '@cooper/api-interfaces';
import { ResourceServiceHelper } from '../../common';
import { User } from '../../entities';
import { IUserSearchCriteria } from '../interfaces';
import { SurveyResponseResourceService } from './survey-responses.service';


@Injectable()
export class UserResourceService {
    constructor(
        private userRepo: UserRepoService,
        private scoresService: SurveyResponseResourceService,
        private helper: ResourceServiceHelper
    ) { }

    private readonly resourceType = CooperResourceType.User;

    public async getById(id: number): Promise<IPayload<IUserDTO>> {
        const user = await this.userRepo.getById(id);
        return this.helper.mapToDTOPayload<User, IUserDTO>(
            this.resourceType,
            { entity: user, attributeMapper: (e) => this.mapEntityToResource(e) }
        );
    }

    public async get(criteria: IUserSearchCriteria): Promise<IPayload<IUserDTO>> {
        console.log(criteria);
        const users = await this.userRepo.findAll();
        const userIds = users.map((u) => u.id);
        const scoreRelationships = await this.scoresService.getScores({ userIds });
        const score: { [userId: number]: number[] } = (scoreRelationships.data as IPayloadData<ISurveyScoreDTO>[]).map((s) => ({
            id: s.id,
            userId: (s.relationships['user'] as IPayloadDataRelationship).id
        })).reduce((acc, next) => {
            const userId = parseInt(next.userId, 10);
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
        const addedEntities = await this.helper.addRequestedResources(requestData, (e) => this.userRepo.add(e));

        return Array.isArray(request.data) ? this.helper.mapToDTOListPayload<User, IUserDTO>(
            this.resourceType,
            { entities: addedEntities, attributeMapper: (e) => this.mapEntityToResource(e) }
        ) : this.helper.mapToDTOPayload<User, IUserDTO>(
            this.resourceType,
            { entity: addedEntities[0], attributeMapper: (e) => this.mapEntityToResource(e) }
        );
    }


    private mapPayloadToEntity(data: IPayloadData<IUserDTO>): User {
        return {
            id: data.id ? data.id : undefined,
            givenName: data.attributes.firstName,
            familyName: data.attributes.lastName,
            userRole: data.attributes.userRole,
        };
    }

    private mapEntityToResource(e: User): IUserDTO {
        return {
            firstName: e.givenName,
            lastName: e.familyName,
            address: e.residentialAddress,
            userRole: e.userRole
        };
    }
}