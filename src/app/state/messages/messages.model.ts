import { guid, ID } from '@datorama/akita';

export interface MessageInterface {
  id: ID,
  time: number;
  value: string;
}

export interface MessagesListInterface {
  id: ID;
  messages: MessageInterface[];
}

export function createNewMessageListForId({
 id
}: Partial<MessagesListInterface>): MessagesListInterface {
  return {
    id,
    messages: []
  };
}

export function createMessage({
  value = '',
}: Partial<MessageInterface>): MessageInterface {
  return {
    id: guid(),
    time: Date.now(),
    value
  };
}
