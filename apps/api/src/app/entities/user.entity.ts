import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Address } from './address.entity';
import { Pantry } from './pantry.entity';

@Entity()
export class User {
    // ID from Firebase
    @PrimaryColumn()
    public id: string;

    @Column({ nullable: true })
    public givenName: string;

    @Column({ nullable: true })
    public familyName: string;

    @OneToOne(type => Address, { cascade: true })
    @JoinColumn()
    public residentialAddress?: Address;  

    @Column({ nullable: true })
    public mobilePhone: string;    

    @Column()
    public userRole: string;

    @OneToOne(type => Pantry, { nullable: true })
    @JoinColumn()
    public staffedPantry?: Pantry;
}