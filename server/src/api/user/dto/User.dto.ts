import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
    username: string;
    mobileNumber: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {

}

export class CreateAuthDto { }

export class AuthenEndPointDto {
    type: string;
    audience?: string;
    idToken: string;
}