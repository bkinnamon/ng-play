import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    socket = webSocket(environment.socketUrl);

    constructor() {}

    getSocket() {
        return this.socket.asObservable();
    }

    send(data) {
        this.socket.next(data);
    }
}
