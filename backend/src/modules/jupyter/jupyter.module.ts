import { type DynamicModule, Global, Module } from '@nestjs/common';
import { JupyterService } from './jupyter.service';
import { HttpModule } from '@nestjs/axios';

export interface JupyterModuleOptions {
  baseUrl: string; // e.g. http://localhost:8888
  token?: string; // Jupyter API token
}

@Module({})
export class JupyterModule {
  static forRoot(options: JupyterModuleOptions): DynamicModule {
    return {
      module: JupyterModule,
      imports: [HttpModule],
      providers: [
        JupyterService,
        {
          provide: 'JUPYTER_OPTIONS',
          useValue: options,
        },
      ],
      exports: [JupyterService],
    };
  }
}
