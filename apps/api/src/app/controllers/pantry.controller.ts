import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PantryResourceService } from '../services/resource/pantry-resource.service';
import { IPantryDTO, IPayload, IPayloadData } from '@cooper/api-interfaces';
import { ApiBody } from '@nestjs/swagger';


@Controller('pantries')
export class PantriesController {
    constructor(private service: PantryResourceService) { }

    @Get(':id')
    public async getById(@Param() params: { id: string }): Promise<IPayload<IPantryDTO>> {
        try {
            const data = ((await this.service.get()).data) as IPayloadData<IPantryDTO>[];
            return {
                data: data.find((d) => d.id === params.id)
            };
        } catch (err) {
            return {
                errors: [{
                    status: '500',
                    title: 'Failed to fetch pantries.'
                }]
            };
        }
    }

    @Get()
    public async get(): Promise<IPayload<IPantryDTO>> {
        try {
            return this.service.get();
        } catch (err) {
            return {
                errors: [{
                    status: '500',
                    title: 'Failed to fetch pantries.'
                }]
            };
        }
    }

    @Post()
    @ApiBody({})
    public async post(@Body() pantry: IPayload<IPantryDTO>): Promise<IPayload<IPantryDTO>> {
        try {
            return this.service.upsert(pantry);
        } catch (err) {
            return {
                errors: [{
                    status: '500',
                    title: 'Failed to fetch pantries.'
                }]
            };
        }
    }
}