import { Controller, Logger } from '@nestjs/common';
import { JupyterService } from 'src/modules/jupyter/jupyter.service';

@Controller('scripts')
export class ScriptsController {
  constructor(private readonly jupyter: JupyterService) {}

  private readonly logger = new Logger(ScriptsController.name);
}
