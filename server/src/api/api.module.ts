import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { Question } from './question/entitys/question.entity';
import { AnswerModule } from './answer/answer.module';
import { QuestionModule } from './question/question.module';
import { ExamsModule } from './exams/exams.module';
import { UploadModule } from './upload/upload.module';

@Module({
    imports: [
        UserModule,
        AnswerModule,
        QuestionModule,
        ExamsModule,
        UploadModule
    ]
})

export class ApiModule { }


