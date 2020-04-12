import { Controller, Get, Post, Body } from '@nestjs/common';
import { PantryResourceService } from '../services/resource/pantry-resource.service';
import { IPantryDTO, IPayload } from '@cooper/api-interfaces';

@Controller('pantries')
export class PantriesController {
    constructor(private service: PantryResourceService) { }

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