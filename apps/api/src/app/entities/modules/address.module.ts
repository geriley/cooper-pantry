import { Address } from '../address.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Address])],
    exports: [TypeOrmModule]
  })
  export class AddressModule {}