import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class SurveyResponse {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ nullable: true })
    public userId?: string;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id'})
    public user?: User;    

    @Column('jsonb')
    public response: any;
}