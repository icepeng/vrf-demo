import { Component, OnInit } from '@angular/core';
import { keygen, proof_to_hash, prove } from 'ecvrf';
import { ServerService } from '../../server/server.service';
import { ClientService } from '../client.service';
import * as BN from 'bn.js';
import * as Chance from 'chance';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  chance = new Chance();
  secretKey: string;
  publicKey: string;
  alpha = this.client.alpha;
  proof: string;
  result: string;
  resultMod: number;
  selected: string;
  accepted: boolean;

  constructor(private server: ServerService, private client: ClientService) {}

  ngOnInit(): void {}

  generateKey(): void {
    const keypair = keygen();
    this.secretKey = keypair.secret_key;
    this.publicKey = keypair.public_key;
  }

  sendPublicKey(): void {
    this.server.sendPublicKey(this.publicKey);
  }

  generateProof(): void {
    this.proof = prove(this.secretKey, this.client.alpha.value);
    this.result = proof_to_hash(this.proof);
    this.resultMod = new BN(this.result, 'hex').modn(1000);
    if (this.resultMod <= 299) {
      this.selected = '성공';
    } else if (this.resultMod <= 979) {
      this.selected = '실패';
    } else {
      this.selected = '파괴';
    }
  }

  bluff(): void {
    this.proof = prove(this.secretKey, this.chance.hash());
    this.result = proof_to_hash(this.proof);
    this.resultMod = new BN(this.result, 'hex').modn(1000);
    if (this.resultMod <= 299) {
      this.selected = '성공';
    } else if (this.resultMod <= 979) {
      this.selected = '실패';
    } else {
      this.selected = '파괴';
    }
  }

  sendProof(): void {
    this.server.sendProof(this.proof);
  }
}
