import { Controller, Request as RequestNest } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AnswerService } from '../service/answer.service';

@Controller('answer')
@ApiTags('Answer')
@ApiBearerAuth('access-token')
export class AnswerController {
    constructor(
        private readonly answerService: AnswerService,
    ) { }  
}
