import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    socket = webSocket('ws://localhost:6789');

    constructor() {}

    getSocket() {
        return this.socket.asObservable();
    }

    send(data) {
        this.socket.next(data);
    }
}
