import {BaseExceptionFilter} from "@nestjs/core";
import {ArgumentsHost} from "@nestjs/common";

export class AllExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    return response.status(500).json({exception});
  }
}
