import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, TableForeignKey } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class SurveyResponse {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true })
    public userId?: number;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id'})
    public user?: User;    

    @Column('jsonb')
    public response: any;
}