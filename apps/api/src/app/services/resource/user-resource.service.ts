import { Injectable } from "@nestjs/common";
import { UserRepoService } from '../repository';
import { IPayload, IPayloadData, IUserDTO, CooperResourceType } from '@cooper/api-interfaces';
import { ResourceServiceHelper } from '../../common';
import { User } from '../../entities';


@Injectable()
export class UserResourceService {
    constructor(
        private userRepo: UserRepoService,
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

    public async get(): Promise<IPayload<IUserDTO>> {
        const users = await this.userRepo.findAll();
        return this.helper.mapToDTOListPayload<User, IUserDTO>(
            this.resourceType,
            { entities: users, attributeMapper: (e) => this.mapEntityToResource(e) }
        );
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
            id: data.id ? parseInt(data.id, 10) : undefined,
        };
    }

    private mapEntityToResource(e: User): IUserDTO {
        return { };
    }
}