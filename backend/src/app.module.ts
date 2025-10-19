import { Module } from '@nestjs/common';
import { JupyterModule } from './modules/jupyter/jupyter.module';

@Module({
  imports: [
    JupyterModule.forRoot({
      baseUrl: 'http://localhost:8888',
      token: 'jupyter-token', // Смотреть в docker-compose.yml
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
