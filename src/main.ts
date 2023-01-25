import { BadRequestException, INestApplication, ValidationError, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { getSwaggerConfig } from "./configuration/swagger";

const exceptionFactory = (errors: ValidationError[]): BadRequestException => new BadRequestException(errors);

const globalValidationPipe = new ValidationPipe({
  exceptionFactory,
  transform: true,
  transformOptions: { enableImplicitConversion: false },
});

async function setupGlobals(app: INestApplication): Promise<void> {
  app.setGlobalPrefix(process.env.APP_URI as string);
  app.enableCors();
  app.useGlobalPipes(globalValidationPipe);
}

function generateApp(): Promise<INestApplication> {
  return NestFactory.create(AppModule);
}

async function bootstrap() {
  const app = await generateApp();
  await setupGlobals(app);
  const document = SwaggerModule.createDocument(app, getSwaggerConfig());
  SwaggerModule.setup(process.env.APP_DOCS_URI as string, app, document);
  await app.listen(process.env.APP_PORT as string);
}

bootstrap();
