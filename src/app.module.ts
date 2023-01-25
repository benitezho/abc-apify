import { Module } from "@nestjs/common";
import configuration from "./configuration/configuration";
import { ConfigModule } from "@nestjs/config";
import { SearchModule } from "./search/search.module";
import { BrowserModule } from "./browser/browser.module";
import { APP_FILTER } from "@nestjs/core";
import { BadRequestExceptionFilter } from "./filters/bad.request.exception.filter";
import { InternalServerErrorFilter } from "./filters/internal.server.error.filter";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SearchModule,
    BrowserModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: InternalServerErrorFilter,
    },
  ],
})
export class AppModule {}
