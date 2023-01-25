import { DocumentBuilder, OpenAPIObject } from "@nestjs/swagger";

export const getSwaggerConfig = (): Omit<OpenAPIObject, "paths"> => {
  return new DocumentBuilder()
    .addBearerAuth()
    .setTitle("ABC Search Apifier")
    .setDescription("Simple ABC News Search Apifier")
    .setVersion("1.0")
    .build();
};
