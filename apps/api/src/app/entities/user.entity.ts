import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;
}