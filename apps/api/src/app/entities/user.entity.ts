import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public givenName: string;

    @Column()
    public familyName: string;

    @Column({ nullable: true })
    public residentialAddressId?: number;

    @OneToOne(type => Address)
    @JoinColumn({ name: 'residentialAddressId', referencedColumnName: 'id'})
    public residentialAddress?: Address;  
}