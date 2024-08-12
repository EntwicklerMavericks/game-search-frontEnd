import { Injectable } from '@angular/core';
import { ApiBESService } from '../services/api-bes.service';

@Injectable({ providedIn: 'root' })
export class UsuarioController {
  constructor(private api: ApiBESService) {}
  private prefix = '/usuario';

  getSaldo = () => {
    return this.api.get(`${this.prefix}`);
  };
}
