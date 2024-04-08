import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards, Query, Request as RequestNest } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { AuthenEndPointDto, CreateUserDto, UpdateUserDto } from '../dto/User.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guards/auth.guard';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';


@Controller('user')
@ApiTags('User')
@ApiBearerAuth('access-token')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return handleResultSuccess(this.userService.create(createUserDto));
    }

    @Post('auth-sign-in')
    async signIn(@Body() userInfo: AuthenEndPointDto) {
        return handleResultSuccess(await this.userService.SignIn(userInfo));
    }

    @UseGuards(AuthGuard)
    @Get()
    findAll() {
        return handleResultSuccess(this.userService.findAll());
    }

    @UseGuards(AuthGuard)
    @Get()
    findOne(@Query('id') id: string) {
        return handleResultSuccess(this.userService.findOneById(id));
    }

    @UseGuards(AuthGuard)
    @Patch()
    async update(@Body() updateUserDto: UpdateUserDto, @RequestNest() request: IAuthRequest) {
        return handleResultSuccess(await this.userService.updateById(request.user.id, updateUserDto));
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.userService.removeById(id));
    }
}
