import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  alpha = new BehaviorSubject<string>(null);
  accepted = new BehaviorSubject<boolean>(null);

  constructor() {}

  sendAlpha(alpha: string): void {
    this.alpha.next(alpha);
  }

  sendAccepted(accepted: boolean): void {
    this.accepted.next(accepted);
  }
}
