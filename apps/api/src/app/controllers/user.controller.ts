import { Controller, Get, Post, Body, Put, Param, NotFoundException } from '@nestjs/common';
import { UserResourceService } from '../services/resource';
import { IPayload, IUserDTO, ISurveyScoreDTO } from '@cooper/api-interfaces';

@Controller('users')
export class UserController {
    constructor(private service: UserResourceService) { }

    @Get(':id')
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
    public async get(): Promise<IPayload<IUserDTO>> {
        try {
            return this.service.get();
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

    @Get()
    public async getUserSurveys(): Promise<IPayload<ISurveyScoreDTO>> {
        throw Error();
    }

}