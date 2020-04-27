import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { InventoryListing } from '../../entities/inventory-listing.entity';

@Injectable()
export class InventoryRepoService {
    constructor(
        @InjectRepository(InventoryListing)
        private repo: Repository<InventoryListing>,
    ) { }

    public findAll(pantryIds: number[]) {
        if (pantryIds && pantryIds.length > 0) {
            return this.repo.find({
                where: {
                    pantryId: In(pantryIds)
                }
            });            
        } else return this.repo.find();
    }

    public add(listing: InventoryListing) {
        return this.repo.save(listing);
    }
}