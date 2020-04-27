import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Pantry } from './pantry.entity';

@Entity()
export class InventoryListing {
    @PrimaryColumn()
    public fdcId: string;

    @PrimaryColumn()
    public pantryId: number;

    @ManyToOne(type => Pantry)
    @JoinColumn({ name: 'pantryId', referencedColumnName: 'id' })
    public pantry?: Pantry;

    @Column()
    public description: string;

    @Column()
    public quantity: number;
}