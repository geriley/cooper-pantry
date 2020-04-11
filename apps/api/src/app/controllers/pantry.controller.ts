import { Controller, Get, Post, Body } from '@nestjs/common';
import { IPayload } from '../common';
import { PantryResourceService } from '../services/resource/pantry-resource.service';
import { IPantryDTO } from '../resources/pantry.model';

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