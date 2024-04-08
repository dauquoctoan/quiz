import { Body, Controller, FileTypeValidator, HttpStatus, MaxFileSizeValidator, ParseFilePipe, ParseFilePipeBuilder, Post, Request as RequestNest, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path'
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('upload')
@ApiTags('Upload')
@ApiBearerAuth('access-token')
export class UploadController {
    constructor(
    ) { }

    @Post('image')
    
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
          destination: './src/public/images'
          , filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            cb(null, `${randomName}${extname(file.originalname)}`)
          }
        })
      }))

    uploadFile(@UploadedFile(
    new ParseFilePipe({
        validators: [
        new MaxFileSizeValidator({ maxSize: 1000000 }),
        new FileTypeValidator({ fileType: /(gif|jpe?g|tiff?|png|webp|bmp)$/i }),
        ],
    }),
    )

    file: Express.Multer.File) {
        return handleResultSuccess({image_url: file.filename});
    }
}
