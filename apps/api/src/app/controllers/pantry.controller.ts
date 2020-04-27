import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PantryResourceService } from '../services/resource/pantry-resource.service';
import { IPantryDTO, IPayload, IPayloadData, IInventoryListing } from '@cooper/api-interfaces';
import { ApiBody } from '@nestjs/swagger';
import { InventoryListingResourceService } from '../services/resource/inventory-listing-resource.service';


@Controller('pantries')
export class PantriesController {
    constructor(
        private service: PantryResourceService,
        private inventory: InventoryListingResourceService
    ) { }

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

    @Get(':id/inventory-search')
    public async searchInventory(@Param('id') id: string, @Query('query') query: string): Promise<IPayload<IInventoryListing>> {
        try {
            return this.inventory.search(id, query);
        } catch (err) {
            return {
                errors: [
                    {
                        status: '500',
                        title: 'Failed to search pantry inventory'
                    }
                ]
            };
        }
    }

    @Post(':id/inventory')
    public async updateInventory(@Param('id') pantryId: string, @Body() body: IPayload<IInventoryListing>) {
        return this.inventory.upsert(pantryId, body.data as IPayloadData<IInventoryListing>);
    }

    @Get(':id/inventory')
    public async getInventory(@Param('id') pantryId: string) {
        return this.inventory.get(pantryId);
    }
}