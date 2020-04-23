import { IPayload, ISurveyScoreDTO, IUserDTO, IPayloadDataRelationship } from '@cooper/api-interfaces';
import { Body, Controller, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { UserResourceService } from '../services/resource';

@Controller('users')
export class UserController {
    constructor(private service: UserResourceService) { }

    @Get(':id')
    @ApiParam({ name: 'id' })
    public async getById(@Param() params: { id: string }): Promise<IPayload<IUserDTO>> {
        try {
            const user = await this.service.getById(params.id);
            if (!user.data) {
                throw new NotFoundException({
                    errors: [
                        {
                            status: '404',
                            title: 'Not Found'
                        }
                    ]
                });
            } else {
                return user;
            }
        } catch (err) {
            if (err && err.message && err.message.errors) {
                return err.message;
            }
            return {
                errors: [{
                    status: '500',
                    title: 'Failed to fetch user.'
                }]
            };
        }
    }

    @Get()
    @ApiQuery({ name: 'include' })
    public async get(@Query() params: { include: string }): Promise<IPayload<IUserDTO>> {
        try {
            return this.service.get({
                include: params && params.include ? params.include.split(',') as any : []
            });
        } catch (err) {
            return {
                errors: [{
                    status: '500',
                    title: 'Failed to fetch users.'
                }]
            };
        }
    }

    @Post()
    @ApiBody({})
    public async post(@Body() pantry: IPayload<IUserDTO>): Promise<IPayload<IUserDTO>> {
        try {
            console.log(pantry);
            return this.service.upsert(pantry);
        } catch (err) {
            return {
                errors: [{
                    status: '500',
                    title: 'Failed to post users.'
                }]
            };
        }
    }

    @Put(':id')
    @ApiParam({ name: 'id' })
    @ApiBody({})
    public async put(@Body() pantry: IPayload<IUserDTO>): Promise<IPayload<IUserDTO>> {
        try {
            return this.service.upsert(pantry);
        } catch (err) {
            return {
                errors: [{
                    status: '500',
                    title: 'Failed to update users.'
                }]
            };
        }
    }

    @Post(':id/relationships/employer')
    @ApiParam({ name: 'id' })
    @ApiBody({})
    public async postUserRelationship(@Param() params: { id: string }, @Body() relationship: IPayload<IPayloadDataRelationship>): Promise<IPayload<IUserDTO>> {
        try {
            return this.service.addPantryRelationship(params.id, relationship);
        } catch (err) {
            return {
                errors: [{
                    status: '500',
                    title: 'Failed to update user pantry relationship.'
                }]
            };
        }
    }

}