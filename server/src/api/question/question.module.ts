import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { QuestionService } from "./service/question.service";
import { QuestionController } from "./controller/question.controller";
import { Question } from "./entitys/question.entity";

@Module({
  imports: [SequelizeModule.forFeature([Question])],
  providers: [QuestionService],
  controllers: [QuestionController]
})

export class QuestionModule { }
