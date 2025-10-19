import { Module } from '@nestjs/common';
import { JupyterModule } from './modules/jupyter/jupyter.module';
import { ScriptsController } from './rest/scripts.controller';

@Module({
  imports: [
    JupyterModule.forRoot({
      baseUrl: process.env.JUPYTER_URL || 'http://localhost:8888',
      token: process.env.JUPYTER_TOKEN || 'jupyter-token', // Смотреть в docker-compose.yml
    }),
  ],
  controllers: [ScriptsController],
})
export class AppModule {}
