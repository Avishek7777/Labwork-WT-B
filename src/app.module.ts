import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { FighterModule } from './fighter/fighter.module';

@Module({
  imports: [NinjasModule, AdminModule, UserModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    entities: [],
    database: 'pgWithNest',
    synchronize: true,
    logging: true,
  }),
  UserModule,
  FighterModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
