import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryListing } from '../inventory-listing.entity';

@Module({
    imports: [TypeOrmModule.forFeature([InventoryListing])],
    exports: [TypeOrmModule]
})
export class InventoryListingModule { }