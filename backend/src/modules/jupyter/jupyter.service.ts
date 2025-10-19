import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { type JupyterModuleOptions } from './jupyter.module';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class JupyterService {
  constructor(
    private readonly http: HttpService,
    @Inject('JUPYTER_OPTIONS') private readonly opts: JupyterModuleOptions,
  ) {
    if (!opts.baseUrl) {
      this.logger.warn('❌ JupyterService: Не указан baseUrl');
    }
    if (!opts.token) {
      this.logger.warn(
        '⚠️ JupyterService: Не указан token, выполнение скриптов будет невозможно',
      );
    }
    this.logger.log('✅ JupyterService: Инициализирован', opts);
  }

  private readonly logger = new Logger(JupyterService.name);

  private get headers() {
    return { Authorization: `Token ${this.opts.token}` };
  }

  async listScripts(path = '') {
    const { data } = await lastValueFrom(
      this.http.get(`${this.opts.baseUrl}/api/contents/${path}`, {
        headers: this.headers,
      }),
    );
    return data;
  }

  async getScript(path: string) {
    const { data } = await lastValueFrom(
      this.http.get(`${this.opts.baseUrl}/api/contents/${path}`, {
        headers: this.headers,
      }),
    );
    return data;
  }

  async saveScript(path: string, code: string) {
    const { data } = await lastValueFrom(
      this.http.put(
        `${this.opts.baseUrl}/api/contents/${path}`,
        {
          type: 'file',
          format: 'text',
          content: code,
        },
        { headers: this.headers },
      ),
    );
    return data;
  }

  async deleteScript(path: string) {
    await lastValueFrom(
      this.http.delete(`${this.opts.baseUrl}/api/contents/${path}`, {
        headers: this.headers,
      }),
    );
  }

  async executeCode(code: string) {
    // Можно создать временный kernel и выполнить код
  }
}
