import { Module } from "@nestjs/common";
import configuration from "./configuration/configuration";
import { ConfigModule } from "@nestjs/config";
import { SearchModule } from "./search/search.module";
import { BrowserModule } from "./browser/browser.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SearchModule,
    BrowserModule,
  ],
})
export class AppModule {}
