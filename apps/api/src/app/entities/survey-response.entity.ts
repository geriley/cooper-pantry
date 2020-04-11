import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SurveyResponse {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column('jsonb')
    public response: any;
}