import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entitys/User.entity';
import { BaseService } from 'src/api/Base.service';
import { Repository } from 'sequelize-typescript';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageFindFail } from 'src/helper/message.create';
import { OAuth2Client } from 'google-auth-library';
import { AuthenEndPointDto } from '../dto/User.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        @InjectModel(User)
        public repository: Repository<User>,
        private jwtService: JwtService
    ) {
        super(repository)
    }

    async getUser(userId: string){
        try {
            return await this.repository.findByPk(userId)
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async SignIn(authenEndPointDto: AuthenEndPointDto){
        const client = new OAuth2Client();
        try {
          const ticket = await client.verifyIdToken({
            idToken: authenEndPointDto?.idToken,
            audience: process.env.CLIENT_ID,
          });
    
          if (ticket) {
            const payload = ticket.getPayload();
            // Kiểm tra người dùng tồn tại
            const user = await this.findOne({ where: { email: payload.email } });
            // xử lý lưu người dùng khi người dùng chưa tạo
            if (!user) {
              const info = await this.create({
                username: payload.email,
                email: payload.email,
                avatar: payload.picture
              });
              if (info) return handleResultSuccess(this.createToken({ id: info.id || '', email: info.email || '' }));
            }
            return handleResultSuccess(this.createToken({ id: user.id || '', email: user.email || '' }));
          }
          throw new UnauthorizedException();
        } catch (error) {
          throw new UnauthorizedException();
        }
        
    }

    createToken(payload) {
        return {
          access_token: this.jwtService.sign({ payload }),
          refresh_token: this.jwtService.sign({ payload }, { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION })
        }
    }
}
