import { PartialType } from '@nestjs/swagger';

export class CreateAnswerDto {
    answername: string;
    mobileNumber: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class UpdateAnswerDto extends PartialType(CreateAnswerDto) {}
