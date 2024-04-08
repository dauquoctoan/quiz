import { Body, Controller, Post, Request as RequestNest } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {  ExamsService } from '../service/exams.service';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('answer')
@ApiTags('Answer')
@ApiBearerAuth('access-token')
export class ExamsController {
    constructor(
        private readonly examsService: ExamsService,
    ) { }  

    @Post()
    async getData(@Body() body){
        const data = await this.examsService.create(body)
        return handleResultSuccess(data)
    }
}
