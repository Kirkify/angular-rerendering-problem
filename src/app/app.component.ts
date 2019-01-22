import {Component, OnInit} from '@angular/core';
import {ConnectionsStore} from './state/connections/connections.store';
import {ConnectionsQuery} from './state/connections/connections.query';
import {Observable} from 'rxjs';
import {ConnectionInterface, createConnection} from './state/connections/connections.model';
import {MessagesStore} from './state/messages/messages.store';
import {createMessage} from './state/messages/messages.model';
import {ID, unshift} from '@datorama/akita';
import {MessagesQuery} from './state/messages/messages.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  connections: Observable<ConnectionInterface[]>;

  private _sayHelloList = ['HELLO', 'BONJOUR', 'HOLA', 'GUTEN TAG', 'CIAO', 'NAMASTE', 'SALAAM'];

  constructor(
    private query: ConnectionsQuery,
    private connectionsStore: ConnectionsStore,
    private messagesQuery: MessagesQuery,
    private messagesStore: MessagesStore) {}

  ngOnInit(): void {
    // Assign the connection observable
    this.connections = this.query.selectAll();

    // Get Stream
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(async (stream) => {
      // Create the first connection
      const connection = createConnection({
        stream,
        messagesStore: this.messagesStore
      });
      // Add it to the store
      this.connectionsStore.add(connection);
      // Start creating messages
      await this._addMessages(connection.id);
    });
  }

  getMessagesForConnection(connectionId: ID) {
    return this.messagesQuery.selectEntity(connectionId);
  }

  // Add 10 hello messages to a specific entity in the connection store
  private async _addMessages(connectionId: ID) {
    // Add 10 messages
    for (let i = 0; i < 10; i++) {
      // Wait 1 before saving each message (Makes seeing the problem easier)
      await this._sleep(1000);

      // Create a new message (By randomly selecting it from the 'hello' list
      const message = createMessage({
        value: this._sayHelloList[Math.floor(Math.random() * Math.floor(this._sayHelloList.length))]
      });

      // Update the messages store by adding the latest message to the connection
      this.messagesStore.update(connectionId, list => {
        return {
          ...list,
          messages: unshift(list.messages, message)
        };
      });
    }
  }

  // Simple way to do a sleep in JS
  private _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
