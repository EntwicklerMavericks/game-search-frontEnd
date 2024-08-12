import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class HospToastService {
  constructor(private messageService: MessageService) {}

  success = (
    summary: string,
    detail?: string,
    key = 'totmess',
    life = 3000
  ) => {
    this.messageService.add({
      severity: 'success',
      summary,
      detail,
      key,
      life,
    });
  };

  error = (summary: string, detail?: string, key = 'totmess', life = 3000) => {
    this.messageService.add({
      severity: 'error',
      summary,
      detail,
      key,
      life,
    });
  };

  warning = (
    summary: string,
    detail?: string,
    key = 'totmess',
    life = 3000
  ) => {
    this.messageService.add({
      severity: 'warn',
      summary,
      detail,
      key,
      life,
    });
  };
}
