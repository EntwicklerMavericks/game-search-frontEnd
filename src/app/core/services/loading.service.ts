import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HospLoadingService {
  public loadingSource = new Subject<boolean>();
  public loadingState: boolean = false;

  show = () => {
    this.loadingState = true;
    this.loadingSource.next(true);
  };

  hide = () => {
    this.loadingState = false;
    this.loadingSource.next(false);
  };
}
