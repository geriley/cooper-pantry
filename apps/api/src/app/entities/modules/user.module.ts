import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { AddressModule } from './address.module';

@Module({
    imports: [AddressModule, TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule]
  })
  export class UserModule {}