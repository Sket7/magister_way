import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { JUPYTER_OPTIONS, type JupyterModuleOptions } from './jupyter.module';

@Injectable()
export class JupyterService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(JUPYTER_OPTIONS) private readonly options: JupyterModuleOptions,
  ) {}

  private readonly logger = new Logger(JupyterService.name);
}
