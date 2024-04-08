import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Repository } from 'sequelize-typescript';
import { Exams } from '../entitys/exams.entity';

@Injectable()
export class ExamsService extends BaseService<Exams> {
    constructor(
        @InjectModel(Exams)
        public repository: Repository<Exams>
    ) {
        super(repository)
    }
}
