import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { MessagesListInterface } from './messages.model';

export interface MessagesState extends EntityState<MessagesListInterface> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'messagesStore' })
export class MessagesStore extends EntityStore<MessagesState, MessagesListInterface> {
  constructor() {
    super();
  }
}
