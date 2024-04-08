import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Repository } from 'sequelize-typescript';
import { Answer } from '../entitys/answer.entity';

@Injectable()
export class AnswerService extends BaseService<Answer> {
    constructor(
        @InjectModel(Answer)
        public repository: Repository<Answer>
    ) {
        super(repository)
    }
}
