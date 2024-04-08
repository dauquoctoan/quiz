import { PartialType } from '@nestjs/swagger';

export class CreateQuestionDto {
    Questionname: string;
    mobileNumber: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {

}