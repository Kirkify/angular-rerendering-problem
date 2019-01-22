import {ID, QueryEntity} from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ConnectionsState, ConnectionsStore } from './connections.store';
import { ConnectionInterface } from './connections.model';
import {combineLatest} from 'rxjs';
import {MessagesQuery} from '../messages/messages.query';
import {auditTime, map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ConnectionsQuery extends QueryEntity<ConnectionsState, ConnectionInterface> {
  constructor(protected store: ConnectionsStore) {
    super(store);
  }
}
