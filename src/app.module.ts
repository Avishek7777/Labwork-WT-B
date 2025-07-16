import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [NinjasModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
