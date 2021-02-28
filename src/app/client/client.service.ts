import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  alpha = new BehaviorSubject<string>(null);

  constructor() {}

  sendAlpha(alpha: string): void {
    this.alpha.next(alpha);
  }
}
