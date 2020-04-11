import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Pantry } from '../pantry.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Pantry])],
    exports: [TypeOrmModule]
  })
  export class PantryModule {}