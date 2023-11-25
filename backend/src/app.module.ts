import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
