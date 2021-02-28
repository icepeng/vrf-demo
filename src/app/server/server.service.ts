import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  publicKey = new BehaviorSubject<string>(null);
  alpha = new BehaviorSubject<string>(null);
  proof = new BehaviorSubject<string>(null);
  result = new BehaviorSubject<string>(null);

  constructor() {}

  sendPublicKey(publicKey: string): void {
    this.publicKey.next(publicKey);
  }

  setAlpha(alpha: string): void {
    this.alpha.next(alpha);
  }

  sendProof(proof: string): void {
    this.proof.next(proof);
  }
}
