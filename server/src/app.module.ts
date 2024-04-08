import { Module, OnApplicationShutdown } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_DB } from './configs/db-config';
import { ApiModule } from './api/api.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
      cache: true,
    }),
    SequelizeModule.forRootAsync(CONFIG_DB),
    ApiModule,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_JWT,
      signOptions: { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION || '1h' },
    }),
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule { }