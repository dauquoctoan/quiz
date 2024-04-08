import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from "src/helper/all-exceptions.filter";
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from "./app.module";
import * as session from 'express-session';
import { join } from "path";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  
  app.useStaticAssets(join(__dirname, '..', 'src/public'));

  const configService = app.get(ConfigService);
  
  app.setGlobalPrefix('v1', {
    exclude: [{ path: 'page', method: RequestMethod.GET }],
  });

  /* config validator */
  app.useGlobalPipes(new ValidationPipe());

  /* handle exceptions */
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  /* config swagger */
  const config = new DocumentBuilder()
    .setTitle('Plane docs')
    .setDescription('The plane API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header'
      },
      'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .addTag('Plane')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      methodKey: string
    ) => methodKey
  };

  const document = SwaggerModule.createDocument(app, config, options);

  SwaggerModule.setup('docs', app, document);

  /* Listen on port */
  await app.listen(configService.get<string>('PORT') || 3000);
}

bootstrap();
