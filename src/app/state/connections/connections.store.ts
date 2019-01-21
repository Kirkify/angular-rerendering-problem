import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import {ConnectionInterface} from './connections.model';

export interface ConnectionsState extends EntityState<ConnectionInterface> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'connectionStore' })
export class ConnectionsStore extends EntityStore<ConnectionsState, ConnectionInterface> {
  constructor() {
    super();
  }
}
