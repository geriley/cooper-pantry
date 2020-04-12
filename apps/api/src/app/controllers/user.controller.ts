import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { UserResourceService } from '../services/resource';
import { IPayload, IUserDTO } from '@cooper/api-interfaces';

@Controller('users')
export class UserController {
    constructor(private service: UserResourceService) { }

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

    @Put()
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
    
}