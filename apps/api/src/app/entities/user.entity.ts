import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm';
import { SurveyResponse } from './survey-response.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;
}