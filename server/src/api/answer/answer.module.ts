import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { AnswerService } from "./service/answer.service";
import { AnswerController } from "./controller/answer.controller";
import { Answer } from "./entitys/answer.entity";

@Module({
  imports: [SequelizeModule.forFeature([Answer])],
  providers: [AnswerService],
  controllers: [AnswerController]
})

export class AnswerModule { }
