import { ID, guid } from '@datorama/akita';

export interface MessageInterface {
  id: ID;
  time: number;
  value: string;
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
