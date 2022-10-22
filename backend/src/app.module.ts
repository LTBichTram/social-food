import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    AuthModule,
    UserModule,
    CloudinaryModule,
    MessageModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
