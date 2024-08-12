import { Injectable } from '@angular/core';
import { BESModalService, IModal } from './modal.service';

@Injectable({ providedIn: 'root' })
export class HospMessageService {
  constructor(private modalService: BESModalService) {}

  success = (title: string, subtitle?: string) => {
    const configModal = new IModal();
    configModal.icon = 'fa fa-check-circle-o';
    configModal.title = title;
    configModal.subtitle = subtitle;

    this.modalService.show(configModal);
  };

  error = (title: string, subtitle?: string) => {
    const configModal = new IModal();
    configModal.icon = 'fa fa-check-circle-o';
    configModal.iconClass = 'bes-color-destructive';
    configModal.title = title;
    configModal.subtitle = subtitle;

    this.modalService.show(configModal);
  };

  warning = (title: string, message?: string) => {
    const configModal = new IModal();
    configModal.icon = 'fa fa-exclamation-triangle';
    configModal.iconClass = 'bes-color-warning';
    configModal.title = title;
    configModal.subtitle = message;

    this.modalService.show(configModal);
  };
}
