import { ID, guid } from '@datorama/akita';
import { MessagesStore } from '../messages/messages.store';
import { createNewMessageListForId } from '../messages/messages.model';

export interface ConnectionInterface {
  id: ID;
  stream: MediaStream;
}

interface CreateConnectionInterface {
  stream: MediaStream;
  messagesStore: MessagesStore;
}

export function createConnection({
  stream = null,
  messagesStore,
}: CreateConnectionInterface): ConnectionInterface {
  // Generate a uuid
  const id = guid();
  // Create a message store for the id
  messagesStore.add(createNewMessageListForId({ id }));
  // Return the connection
  return {
    id,
    stream
  };
}
