import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pantry {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;
}