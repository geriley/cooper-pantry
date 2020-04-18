import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public address1: string;

    @Column({ nullable: true })
    public address2: string;

    @Column()
    public city: string;

    @Column()
    public state: string;

    @Column()
    public zipcode: string;
}