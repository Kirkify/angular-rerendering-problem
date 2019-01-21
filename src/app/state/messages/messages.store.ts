import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { MessageInterface } from './messages.model';

export interface MessagesState extends EntityState<MessageInterface> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'messagesStore' })
export class MessagesStore extends EntityStore<MessagesState, MessageInterface> {
  constructor() {
    super();
  }
}
