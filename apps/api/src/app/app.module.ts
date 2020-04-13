import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import * as PostgressConnectionStringParser from "pg-connection-string";
import { entities } from './entities';
import { controllerModules } from './controllers/modules';
import { ConfigModule } from '@nestjs/config';

const databaseUrl: string = process.env.DATABASE_URL;
const connectionOptions = databaseUrl ? PostgressConnectionStringParser.parse(databaseUrl) : undefined;

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'pantry'),
      exclude: ['/api*']
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: connectionOptions ? connectionOptions.host : 'localhost',
      port: connectionOptions ? parseInt(connectionOptions.port, 10) : 5432,
      username: connectionOptions ? connectionOptions.user : 'postgres',
      password: connectionOptions ? connectionOptions.password : 'demo',
      database: connectionOptions ? connectionOptions.database : 'cooper-pantry',
      entities: [
        ...entities,
      ],
      synchronize: true,
    }),
    ...controllerModules,
  ],
  controllers: [AppController],
})
export class AppModule { }
