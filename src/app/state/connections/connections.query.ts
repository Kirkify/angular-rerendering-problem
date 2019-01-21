import {ID, QueryEntity} from '@datorama/akita';
import { Injectable } from '@angular/core';
import { ConnectionsState, ConnectionsStore } from './connections.store';
import { ConnectionInterface } from './connections.model';
import {combineLatest} from 'rxjs';
import {MessagesQuery} from '../messages/messages.query';
import {auditTime, map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ConnectionsQuery extends QueryEntity<ConnectionsState, ConnectionInterface> {
  constructor(protected store: ConnectionsStore, private messagesQuery: MessagesQuery) {
    super(store);
  }

  selectAllConnections() {
    return combineLatest(
      this.selectAll(),
      this.messagesQuery.selectAll({ asObject: true })
    ).pipe(
      auditTime(100),
      map(([connections, messages]) => {
        return connections.map(connection => {
          return {
            ...connection,
            messages: (connection.messages as ID[]).map(id => messages[id])
          };
        });
      })
    );
  }
}
