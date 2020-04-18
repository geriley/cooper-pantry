import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Address } from './address.entity';

@Entity()
export class User {
    // ID from Firebase
    @Column()
    public id: string;

    @Column()
    public givenName: string;

    @Column()
    public familyName: string;

    @Column({ nullable: true })
    public residentialAddressId?: number;

    @OneToOne(type => Address)
    @JoinColumn({ name: 'residentialAddressId', referencedColumnName: 'id'})
    public residentialAddress?: Address;  

    @Column()
    public userRole: string;
}