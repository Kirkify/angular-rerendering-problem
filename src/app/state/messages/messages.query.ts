import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { MessagesState, MessagesStore } from './messages.store';
import { MessageInterface } from './messages.model';

@Injectable({ providedIn: 'root' })
export class MessagesQuery extends QueryEntity<MessagesState, MessageInterface> {
  constructor(protected store: MessagesStore) {
    super(store);
  }
}
