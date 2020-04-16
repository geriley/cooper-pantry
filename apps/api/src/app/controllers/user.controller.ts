import { Controller, Get, Post, Body, Put, Param, NotFoundException, Query } from '@nestjs/common';
import { UserResourceService } from '../services/resource';
import { IPayload, IUserDTO, ISurveyScoreDTO } from '@cooper/api-interfaces';
import { ApiParam, ApiBody, ApiBodyOptions, ApiQuery } from '@nestjs/swagger';
import { CooperResourceType } from '../../../../../libs/api-interfaces/src/lib/resource-types.enum';

@Controller('users')
export class UserController {
    constructor(private service: UserResourceService) { }

    @Get(':id')
    @ApiParam({ name: 'id' })
    public async getById(@Param() params: { id: string }): Promise<IPayload<IUserDTO>> {
        try {
            const user = await this.service.getById(parseInt(params.id, 10));
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

    @Get('survey-scores')
    public async getUserSurveys(): Promise<IPayload<ISurveyScoreDTO>> {
        throw Error();
    }

}