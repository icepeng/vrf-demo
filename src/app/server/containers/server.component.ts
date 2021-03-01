import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ClientService } from '../../client/client.service';
import { verify } from 'ecvrf';
import * as Chance from 'chance';
import * as BN from 'bn.js';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  chance = new Chance();
  publicKey = this.server.publicKey;
  proof = this.server.proof;
  result: string;
  resultMod: number;
  selected: string;
  alpha: string;
  accepted: boolean;

  constructor(public server: ServerService, private client: ClientService) {}

  ngOnInit(): void {}

  generateAlpha(): void {
    this.alpha = this.chance.hash();
  }

  sendAlpha(): void {
    this.server.setAlpha(this.alpha);
    this.client.sendAlpha(this.alpha);
  }

  verify(): void {
    try {
      this.result = verify(this.publicKey.value, this.proof.value, this.alpha);
      this.resultMod = new BN(this.result, 'hex').modn(1000);
      if (this.resultMod <= 299) {
        this.selected = '성공';
      } else if (this.resultMod <= 979) {
        this.selected = '실패';
      } else {
        this.selected = '파괴';
      }
      this.accepted = true;
      this.client.sendAccepted(true);
    } catch (err) {
      this.result = undefined;
      this.resultMod = undefined;
      this.selected = undefined;
      this.accepted = false;
      this.client.sendAccepted(false);
    }
  }
}
