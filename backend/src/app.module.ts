import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AuthModule,
    UserModule,
    MessageModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
