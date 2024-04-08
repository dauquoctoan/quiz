import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./entitys/User.entity";
import { UserService } from "./service/user.service";
import { UserController } from "./controller/user.controller";
import { MeController } from "./controller/me.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController, MeController]
})

export class UserModule { }
