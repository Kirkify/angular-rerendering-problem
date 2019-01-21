import { ID, guid } from '@datorama/akita';
import { MessageInterface } from '../messages/messages.model';

export interface ConnectionInterface {
  id: ID;
  stream: MediaStream;
  messages: ID[] | MessageInterface[];
}

export function createConnection({
  stream = null,
  messages = [],
}: Partial<ConnectionInterface>): ConnectionInterface {
  return {
    id: guid(),
    stream,
    messages
  };
}
