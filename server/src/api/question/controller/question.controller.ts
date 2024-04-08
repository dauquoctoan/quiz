import { Controller, Request as RequestNest } from '@nestjs/common';
import { QuestionService } from '../service/question.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
@ApiBearerAuth('access-token')
export class QuestionController {
    constructor(
        private readonly questionService: QuestionService,
    ) { }
        
}
