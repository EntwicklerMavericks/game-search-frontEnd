import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class IModal {
  constructor() {
    this.type = 'dialog';
    this.btnConfirm = 'Confirmar';
    this.btnCancel = 'Cancelar';
    this.iconClass = 'bes-color-primary';
  }
  type: 'dialog' | 'confirm';
  title?: string;
  subtitle?: string;
  icon?: string;
  iconClass: string;
  btnConfirm: string;
  btnCancel: string;
  data?: any;
  btnConfirmEvent?: () => void;
}

@Injectable({ providedIn: 'root' })
export class BESModalService {
  public modalSource = new Subject<IModal | null>();
  public modalState: boolean = false;

  show = (config = new IModal()) => {
    this.modalState = true;
    this.modalSource.next(config);
  };

  hide = () => {
    this.modalState = false;
    this.modalSource.next(null);
  };
}
