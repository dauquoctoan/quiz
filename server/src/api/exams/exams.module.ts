import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { Exams } from "./entitys/exams.entity";
import { ExamsService } from "./service/exams.service";
import { ExamsController } from "./controller/exams.controller";

@Module({
  imports: [SequelizeModule.forFeature([Exams])],
  providers: [ExamsService],
  controllers: [ExamsController]
})

export class ExamsModule { }
