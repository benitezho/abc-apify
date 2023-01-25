import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller("/")
@ApiTags("search")
export class SearchController {
  @Get("consulta")
  public async getNews(): Promise<void> {}
}
