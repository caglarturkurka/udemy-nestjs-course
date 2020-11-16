import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {MongooseModule} from "@nestjs/mongoose";
import environment from "../tools/environment/environment";
import {LibsModule} from "../libs/libs.module";

@Module({
  imports: [
    MongooseModule.forRoot(environment.mongoUrl),
    LibsModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
