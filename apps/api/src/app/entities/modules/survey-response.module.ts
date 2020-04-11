import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SurveyResponse } from '../survey-response.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SurveyResponse])],
    exports: [TypeOrmModule]
  })
  export class SurveyResponseModule {}