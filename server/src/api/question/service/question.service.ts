import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Question } from '../entitys/question.entity';
import { BaseService } from 'src/api/Base.service';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class QuestionService extends BaseService<Question> {
    constructor(
        @InjectModel(Question)
        public repository: Repository<Question>
    ) {
        super(repository)
    }
}
